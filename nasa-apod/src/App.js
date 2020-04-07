import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';
import moment from 'moment';
import * as api from './lib/api';

class App extends Component {

  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  getAPOD = async (date) => {

    if (this.state.loading) return; //이미 요청중이라면 무시

    this.setState({
      loading: true
    });

    //Promise 이용
    // api.getAPOD(date).then((response) => {
    //   console.log(response);
    // })

    //async/await 이용
    try {
      const response = await api.getAPOD(date);
      // console.log(response); //넘어오는 data의 mediaType이 영상일수도 이미지일수도 있음

      // 비구조화 할당 + 새로운 이름 
      const { date: retrievedDate, url, media_type: mediaType } = response.data;

      if (!this.state.maxDate) {
        // 만약에 maxDate 가 없으면 지금 받은 date 로 지정
        // 처음 받는 데이터가 오늘 날짜. 다음 페이지로 넘길 수 없음.
        this.setState({
          maxDate: retrievedDate
        })
      }

      this.setState({
        date: retrievedDate,
        mediaType,
        url
      });

    } catch (e) {
      console.log(e);
    }

    this.setState({
      loading: false
    });
  }

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(prevDate);
  }

  handleNext = () => {
    const { date, maxDate } = this.state;
    if(date===maxDate) return;

    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(nextDate);
  }

  componentDidMount() {
    this.getAPOD();
  }

  render() {
    const { url, mediaType, loading } = this.state;
    const { handleNext, handlePrev } = this;

    return (
      <ViewerTemplate spaceNavigator={<SpaceNavigator onNext={handleNext} onPrev={handlePrev} />}
        viewer={(<Viewer url={url} mediaType={mediaType} loading={loading} />)} />
    );
  }
}

export default App;
