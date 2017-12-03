import React from 'react';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';

export default class TimeChart extends React.Component{
    render(){
        if(!(this.props.elapsed&&this.props.total)) return (<div>Пожалуйста введите время и запустите таймер</div>);
        let data = {
            // labels: ["Прошло ...", "Осталось ..."],
                datasets: [{
                // label: "Время",
                data: [this.props.elapsed, this.props.total - this.props.elapsed],
                backgroundColor: [
                    'rgba(208, 255, 20, 0.97)',
                    'rgba(215, 216, 211, 0.97)'
                ],
                borderColor: [
                    'rgba(179, 224, 0, 0.97)',
                    'rgba(166, 168, 157, 0.97)'
                ],
                borderWidth: 1
            }]
        };
        let opts = {
            animation: {
                duration: 0, // general animation time
            },
            hover: {
                animationDuration: 0, // duration of animations when hovering an item
            },
            responsiveAnimationDuration: 0, // animation duration after a resize
        };

        return(
            <div>
                <Pie data={data} options={opts} />
            </div>
        );
    }
}

TimeChart.propTypes = {
    elapsed: PropTypes.number,
    total: PropTypes.number,
};