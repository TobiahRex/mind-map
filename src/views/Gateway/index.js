/* eslint-disable jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import apiActions from '../../redux/api';
import gatewayActions from '../../redux/gateway';

const { arrayOf, any, shape, string, number, bool, func } = PropTypes;

class Gateway extends React.Component {
  static propTypes = {
    showNotification: func.isRequired,
    courses: arrayOf(any),
    origins: arrayOf(
      shape({
        code: string,
        name: string,
      })
    ),
    destinations: arrayOf(
      shape({
        code: string,
        name: string,
      })
    ),
    majors: arrayOf(
      shape({
        codes: arrayOf(string),
        name: string,
      })
    ),
    apiStatus: shape({
      error: string,
      count: number,
      fetching: bool
    }).isRequired,
    redux: shape({
      fetching: func.isRequired,
      getOriginCodes: func.isRequired,
      getDestinationCodes: func.isRequired,
      getCourses: func.isRequired
    }).isRequired
  };
  static defaultProps = {
    courses: [],
    origins: [],
    destinations: [],
    majors: [],
  };
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      origin: '',
      destination: '',
      // major: '',
      // destinationSchool: 'UC Berkeley',
    };
  }

  renderOptions = (source, options) => options.map(({ name, code }, i) => (
    <MenuItem
      key={Buffer.from(`${code}${i}`, 'utf8').toString('base64')}
      onClick={() => this.handleOnChange({
        state: {
          [source]: code,
          [`${source}Name`]: name,
        },
        source,
      })}
    >
      {name}
    </MenuItem>));

    // {/* <option key={Buffer.from(`${code}${i}`, 'utf8').toString('base64')} value={code}>
    //   {name}
    // </option>)); */}
  // renderOptions = options => options.map(({ name, code }, i) => (
  //   <option key={Buffer.from(`${code}${i}`, 'utf8').toString('base64')} value={code}>
  //     {name}
  //   </option>));

    handleOnChange = ({ state, source }) => {
      const { redux } = this.props;
      const { origin } = this.state;

      let apiQuery = () => {}, redirect = false;

      switch (source) {
        case 'origin': apiQuery = () => {
          redux.getDestinationCodes(state.origin);
          redux.getMajorCodes(state.origin);
        }; break;
        case 'destination': { // eslint-disable-line
          apiQuery = () => redux.getCourses(origin, state.destination);
          redirect = true;
        } break;
        case 'major': { // eslint-disable-line
          apiQuery = () => redux.getCourses(origin, state.major);
          redirect = true;
        } break;
        default: break;
      }

      this.setState(() => ({ ...state, redirect }), () => {
        apiQuery();
      });
    };

    render() {
      const {
        origin,
        originName,
        // destination,
        destinationName,
        // major,
        majorName,
        redirect,
        // courses
        // destinationSchool
      } = this.state;

      const {
        // courses,
        origins,
        destinations,
        majors,
      } = this.props;
      if (redirect) return <Redirect to="/sankey" />;
      return (
        <div style={{
          width: '100%',
          minHeight: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
            <h3 style={{
              fontStyle: 'italic',
              color: 'grey',
            }}
            >
              {'"My Current School"'}
            </h3>
            <DropdownButton
              bsStyle="primary"
              bsSize="large"
              title={originName || 'Current College'}
              key="origin-cologe-button"
              id="dropdown-basic-origin"
            >
              {origins.length ? this.renderOptions('origin', origins) : ''};
            </DropdownButton>
          </div>
          <br />
          <div style={{
            marginTop: 80,
            display: 'flex',
            justifyContent: 'space-around',
            width: '80%',
          }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 190,
            }}
            >
              <h3 style={{
                fontStyle: 'italic',
                color: 'grey',
              }}
              >
                {'"I want to transfer to"'}
              </h3>
              <DropdownButton
                bsStyle="primary"
                bsSize="large"
                title={destinationName || 'Choose University'}
                key="origin-cologe-button"
                id="dropdown-basic-origin"
                disabled={!origin}
              >
                {destinations.length ? this.renderOptions('destination', destinations) : ''};
              </DropdownButton>
              <p style={{ color: 'grey' }}>Choose a transfer school to show a list of majors</p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              color: '#3472F7',
            }}
            >
              <h3>
                or
              </h3>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 190,
            }}
            >
              <h3 style={{
                fontStyle: 'italic',
                color: 'grey',
              }}
              >
                {'"I want to study"'}
              </h3>
              <DropdownButton
                bsStyle="primary"
                bsSize="large"
                title={majorName || 'Choose A Major'}
                key="origin-cologe-button"
                id="dropdown-basic-origin"
                disabled={!origin}
              >
                {majors.length ? this.renderOptions('major', majors) : ''};
              </DropdownButton>
              <p style={{ color: 'grey' }}>
                Choose a major to show a list of Universities
              </p>
            </div>
          </div>
          <br />
        </div>
      );
    }
}

export default connect(
  ({ api: apiStatus, gateway }) => ({
    apiStatus,
    origins: [...gateway.origins],
    destinations: [...gateway.destinations],
    majors: [...gateway.majors],
  }),
  dispatch => ({
    redux: {
      fetching: () => dispatch(apiActions.fetching()),
      getOriginCodes: () => dispatch(gatewayActions.getOriginCodes()),
      getDestinationCodes: origin => dispatch(gatewayActions.getDestinationCodes(origin)),
      getMajorCodes: (origin, destination) => dispatch(gatewayActions.getMajorCodes(origin, destination)),
      getCourses: (codes) => dispatch(gatewayActions.getCourses(codes.origin, codes.destination, codes.major)),
    },
  })
)(Gateway);
/*
Control Flow:
1. call getOrigins,
2. saga calls the api.
3. saga calls getOriginsSuccess
4. call getdestinations,
5. saga calls the api.
6. saga calls getDestinationsSuccess
7. call getCourses
8. saga calls api.
9. saga calls getCoursesSuccess
10. redirect page.

*/
