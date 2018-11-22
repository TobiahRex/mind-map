import React from 'react';
import ReactEcharts from 'echarts-for-react';
import data from './data';
// import data from './data';


class Dashboard extends React.Component {

  getOption = () => {
    const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
    const bgColor = '#2E2733';

    const itemStyle = {
      star5: {
        color: colors[0]
      },
      star4: {
        color: colors[1]
      },
      star3: {
        color: colors[2]
      },
      star2: {
        color: colors[3]
      }
    };

    // for (let j = 0; j < data.length; ++j) {
    //   const level1 = data[j].children;
    //   for (let i = 0; i < level1.length; ++i) {
    //     const block = level1[i].children;
    //     const bookScore = [];
    //     let bookScoreId;
    //     for (let star = 0; star < block.length; ++star) {
    //       let style = ((name) => {
    //         switch (name) {
    //           case '5☆':
    //           bookScoreId = 0;
    //           return itemStyle.star5;
    //           case '4☆':
    //           bookScoreId = 1;
    //           return itemStyle.star4;
    //           case '3☆':
    //           bookScoreId = 2;
    //           return itemStyle.star3;
    //           case '2☆':
    //           bookScoreId = 3;
    //           return itemStyle.star2;
    //         }
    //       })(block[star].name);
    //
    //       block[star].label = {
    //         color: style.color,
    //         downplay: {
    //           opacity: 0.5
    //         }
    //       };
    //
    //       if (block[star].children) {
    //         style = {
    //           opacity: 1,
    //           color: style.color
    //         };
    //         block[star].children.forEach(function (book) {
    //           book.value = 1;
    //           book.itemStyle = style;
    //
    //           book.label = {
    //             color: style.color
    //           };
    //
    //           let value = 1;
    //           if (bookScoreId === 0 || bookScoreId === 3) {
    //             value = 5;
    //           }
    //
    //           if (bookScore[bookScoreId]) {
    //             bookScore[bookScoreId].value += value;
    //           }
    //           else {
    //             bookScore[bookScoreId] = {
    //               color: colors[bookScoreId],
    //               value: value
    //             };
    //           }
    //         });
    //       }
    //     }
    //
    //     level1[i].itemStyle = {
    //       color: data[j].itemStyle.color
    //     };
    //   }
    // }


    return {
      title: {
        text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
        subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
        textStyle: {
          fontSize: 14,
          align: 'center'
        },
        subtextStyle: {
          align: 'center'
        },
        sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
      },
      series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data,
        radius: [0, '95%'],
        sort: null,
        levels: [{}, {
          r0: '15%',
          r: '35%',
          itemStyle: {
            borderWidth: 2
          },
          label: {
            rotate: 'tangential'
          }
        }, {
          r0: '35%',
          r: '70%',
          label: {
            align: 'right'
          }
        }, {
          r0: '70%',
          r: '72%',
          label: {
            position: 'outside',
            padding: 3,
            silent: false
          },
          itemStyle: {
            borderWidth: 3
          }
        }]
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Sunburst</h1>
        <div>
          <ReactEcharts
            option={this.getOption()}
            style={{
              height: '600px',
              width: '100%'
            }}
            className='react_for_echarts'
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
