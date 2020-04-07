import React, {Component} from "react";
import Chart from "chart.js";

class LineChart extends Component {
    chart = null;
    canvas=null;

    draw(){
        //새로 그려질 때 기존 인스턴스 제거
        if (this.chart){
            this.chart.destroy();
            this.chart = null;
        }

        const {data,pair}=this.props;

        const config = {
            type: "line",
            data: {
                labels: data.map(d => d.date),
                datasets: [
                    {
                        label: "price",
                        data: data.map(d => d.value),
                        fill: false,
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        lineTension: 0,
                        pointRadius: 0
                    }
                ]
            },

            options: {
                responsive: true,
                title: {
                    display: true,
                    text: pair +' 24hr Chart'
                },
                tooltips: {
                    mode: "index",
                    intersect: false
                },
                hover: {
                    mode: "nearest",
                    intersect: true
                }
            }
        };

        const ctx=this.canvas.getContext("2d"); //2d 그래픽 드로잉 컨텍스트에 엑세스.
        this.chart = new Chart(ctx, config); //chart.js 사용(라이브러리 필요.) -> ctx를 첫번째 argument로 넘겨주고, 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍니다.
    }

    componentDidMount(){
        this.draw();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.data !== this.props.data){
            this.draw();
        }
    }

    componentWillUnmount(){
        //컴포넌트가 사라질 때 인스턴스 제거
        if(this.chart){
            this.chart.destroy();
        }
    }

    render(){
        return (
            <div className="LineChart">
                {/*
                ref를 통해서 실제 DOM에 대한 접근
                */}
                <canvas ref={ref => (this.canvas=ref)}/>
            </div>
        );
    }
}

export default LineChart;