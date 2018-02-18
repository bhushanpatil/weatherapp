import React from 'react';
import s from './styles';
import moment from 'moment'

const WeatherItem = (props) => (<s.WeatherItem isActive={props.isActive}>
		<s.DateHeading>{moment(props.data.dt * 1000).format("ddd")}</s.DateHeading>
		<s.DateSubHeading>{moment(props.data.dt * 1000).format("MMM D")}</s.DateSubHeading>

		<s.DateSubHeading2>{moment(props.data.dt * 1000).format("h:mm a")}</s.DateSubHeading2>

		<s.Imagewrapper>
			<img src={"http://openweathermap.org/img/w/"+props.data.weather[0].icon+".png"} width="80px" height="80px" />
		</s.Imagewrapper>

		<s.TempWrapper>
			<s.LargTemp>{parseInt(props.data.main.temp_max)}&deg;</s.LargTemp>
			<s.SmallTemp>/{parseInt(props.data.main.temp_min)}&deg;</s.SmallTemp>
		</s.TempWrapper>

		<s.InfoWrapper>
		{props.data.weather[0].description}
		</s.InfoWrapper>

	</s.WeatherItem>)


export default WeatherItem;