/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { shallow } from 'enzyme';
import Content from '../Content.js'



describe("Content component",()=>{
	describe("Content component mounting",()=>{
		const wrapper = shallow(<Content />)
		it("Should mount",()=>{
			expect(wrapper.length).toEqual(1)
		})
	})
})