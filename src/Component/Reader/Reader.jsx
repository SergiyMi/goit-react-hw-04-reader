import React, { Component } from 'react';
import queryString from 'query-string';

import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

import styles from './Reader.module.css';

export default class Reader extends Component {
  //   if (!this.props.location.search) {
  //     this.props.history.push({
  //       ...this.props.location,
  //       search: '?item=1',
  //     });
  //     const item = queryString.parse(this.props.location.search);
  //   }

  //   !params.item.includes(`?item=${parseInt(params.item)}`) &&
  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    console.log(params);
    if (
      !params.item ||
      Number(params.item) < 1 ||
      Number(params.item) > this.props.items.length
    ) {
      this.props.history.push({
        ...this.props.location,
        search: '?item=1',
      });
      return;
    }
  }

  handleIncrement = ({ target: { name } }) => {
    const params = queryString.parse(this.props.location.search);
    this.props.history.push({
      ...this.props.location,
      search:
        name === 'increment'
          ? `?item=${Number(params.item) + 1}`
          : `?item=${Number(params.item) - 1}`,
    });
  };

  render() {
    const params = queryString.parse(this.props.location.search);

    return (
      <div className={styles.reader}>
        {params.item && (
          <>
            <Controls
              onIncrement={this.handleIncrement}
              pageNumber={params.item}
              max={this.props.items.length}
            />
            <Counter pageNumber={params.item} len={this.props.items.length} />
            <Publication items={this.props.items} pageNumber={params.item} />
          </>
        )}
      </div>
    );
  }
}
