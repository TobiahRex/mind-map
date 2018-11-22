import React from 'react';
import ReactEcharts from 'echarts-for-react';
import data from './data';
// import data from './data';


class TrueFood extends React.Component {
  getOption = () => {
    const getLevelOption = () => [
      {
        itemStyle: {
          normal: {
            borderColor: '#777',
            borderWidth: 0,
            gapWidth: 1
          }
        },
        upperLabel: {
          normal: {
            show: false
          }
        }
      },
      {
        itemStyle: {
          normal: {
            borderColor: '#555',
            borderWidth: 5,
            gapWidth: 1
          },
          emphasis: {
            borderColor: '#ddd'
          }
        }
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          normal: {
            borderWidth: 5,
            gapWidth: 1,
            borderColorSaturation: 0.6
          }
        }
      }
    ];


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
        text: 'True Food',
        left: 'center'
      },
      series: [
        {
          name: 'Disk Usage',
          type: 'treemap',
          visibleMin: 300,
          label: {
            show: true,
            formatter: '{b}'
          },
          upperLabel: {
            normal: {
              show: true,
              height: 30
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#fff'
            }
          },
          levels: getLevelOption(),
          data,
        }
      ]
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

export default TrueFood;
