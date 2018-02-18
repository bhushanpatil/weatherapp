/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from '../Header.js'



describe("Header component",()=>{
	describe("Header component mounting",()=>{
		const wrapper = shallow(<Header />)
		it("Should mount",()=>{
			expect(wrapper.length).toEqual(1)
		})
	})
})