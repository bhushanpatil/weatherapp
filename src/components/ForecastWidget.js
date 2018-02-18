import React from 'react';
import axios from 'axios';
import s from './styles';
import WeatherItem from './WeatherItem';

class ForecastWidget extends React.Component {

	constructor (props){
		super(props);

		this.state = {
			weatherData : {},
			loading: true,
			error : false
		}

		this.apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+props.location+'&units=metric&mode=json&appid=804e4d70dac47f7a89ea864e218a4dbf'
	}

	componentDidMount(){

		//call api data here
		axios.get(this.apiUrl)
		  .then((response) => {
		    //console.log(response);
		    this.setState({
		    	weatherData: response.data,
		    	loading: false
		    })
		  })
		  .catch((error) => {
		    //console.log(error);
		    this.setState({
		    	error: true,
		    	loading: false
		    });
		  });
	}
	render (){

		console.log(this.state)

		return	<s.outerContainer> 
				<s.Title>{this.props.location} 5 Days Weather</s.Title>
				<s.WidgetWrapper>
				<s.Loading isVisible={this.state.loading}> Loading .. </s.Loading>
				<s.Error isVisible={this.state.error}> Error while fetching data .. </s.Error>
				<s.WidgetScroller isVisible={this.state.weatherData && this.state.weatherData.list && this.state.weatherData.list.length > 0}>
					
					{this.state.weatherData && this.state.weatherData.list && 
						this.state.weatherData && this.state.weatherData.list.map((itme)=><WeatherItem data={itme}/>								
						)}
				</s.WidgetScroller>
				</s.WidgetWrapper>
				</s.outerContainer>
	}
}

export default ForecastWidget;