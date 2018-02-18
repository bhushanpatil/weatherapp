/**
 * @jest-environment node
 */
import 'jsdom-global/register'
import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import ForecastWidget from '../ForecastWidget'
import WeatherItem from '../WeatherItem'
import s from '../styles'



describe("ForecastWidget component",()=>{
	describe("ForecastWidget component mounting",()=>{
		const wrapper = shallow(<ForecastWidget />)
		it("Should mount",()=>{
			expect(wrapper.length).toEqual(1)
		})	


	})

	describe("ForecastWidget component mounting with props",()=>{
		const wrapper = mount(<ForecastWidget location="Mumbai"/>)
		


		it("Should mount with props",()=>{
			
			expect(wrapper.length).toEqual(1);
			
		})


	})

})