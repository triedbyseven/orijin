import { Component } from 'react';

export interface FadInCProps {
  isTableRow?: boolean;
  children: any;
}

export interface FadInCState {}

class FadInC extends Component<FadInCProps, FadInCState> {
  constructor(props) {
    super(props);
    // cards, elements tha will be used in the tween
    // @ts-ignore
    this.cards = [];
    // the timeline instance
    // @ts-ignore
    this.tl = new TimelineLite({ paused: true });
    // @ts-ignore
    this.cardsTween;
  }

  render() {
    if (this.props.isTableRow)
      return (
        // @ts-ignore
        <tr className="animate" ref={(li) => (this.myElements[index] = li)}>
          {this.props.children}
          <style jsx>{`
            .animate {
              opacity: 0;
            }
          `}</style>
        </tr>
      );

    return (
      <div className="animate">
        {this.props.children}
        <style jsx>{`
          .animate {
            opacity: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default FadInC;
