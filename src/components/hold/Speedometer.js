import React from "react";
import _ from "lodash";
import {
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./Speedometer.css";

import { black } from "ansi-colors";

var num = 0;
var percentage;
var topSpeed = 0;
var averageSpeed = 0;

class Speedometer extends React.Component {
    tick() {
        num = Math.floor(Math.random() * 100);
        percentage = num / 2;
        if (topSpeed < num) {
            topSpeed = num;
        }
        averageSpeed = (num + averageSpeed) / 2;
        this.setState(prevState => ({}));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <App />;
    }
}

function RadialSeparator(props) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`
      }}
    >
      <div style={props.style} />
    </div>
  );
}

function RadialSeparators(props) {
  return props.values.map(value => (
    <RadialSeparator turns={value} style={props.style} />
  ));
}

function App() {
    percentage = num / 2;
    const strokeWidth = 7;
    const rotation = 0.75;
    const circleRatio = 0.5;
    const numSeparators = 10;
    return (
        <div className="speedometer"
            style={{
                paddingLeft: "25%",
                paddingTop: "25%",
                width: "70%",
                textAlign: "center"
            }}
        >
            <CircularProgressbarWithChildren
                value={percentage}
                strokeWidth={strokeWidth}
                circleRatio={circleRatio}
                styles={buildStyles({
                    strokeLinecap: "butt",
                    rotation: rotation
                })}
            >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <RadialSeparators
                    values={_.range(numSeparators + 1).map(
                        index => (circleRatio / numSeparators) * index + rotation
                    )}
                    style={{
                        background: "#888",
                        width: "2px",
                        height: "5%",
                        marginTop: -10
                    }}
                />
                <span>
                    <div>Speed: {num}</div>
                    <div>Top Speed: {topSpeed}</div>
                    <div>Average Speed: {averageSpeed.toFixed()}</div>
                </span>
            </div>
        </CircularProgressbarWithChildren>
    </div>
    );
}

export default Speedometer;
