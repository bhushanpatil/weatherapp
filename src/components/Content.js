import React from 'react'
import s from './styles';
import ForecastWidget from './ForecastWidget'

 
class Content extends React.Component { 

	render(){
		return <s.ContentWrapper>
				<ForecastWidget location="Mumbai,In" />
		</s.ContentWrapper>
	}
}


export default Content;