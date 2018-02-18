import styled from 'styled-components';


const styles = {};

styles.Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


styles.ContentWrapper = styled.div`
	/*border: 1px solid red;*/
	display: flex;
	
`;

styles.Loading = styled.div`
	display: ${props=> props.isVisible?'block':'none'};
	color: #f05514;
	font-size: 24px;
`;

styles.Error = styled.div`
	display: ${props=> props.isVisible?'block':'none'};
	color: #ff0000;
	font-size: 14px;
`;

styles.outerContainer = styled.div`
	margin: auto;
	`;

styles.WidgetWrapper = styled.div`
	display: block;
	background: #f1f1f3;
	margin: 0 auto;
	 border: 1px solid #bdbab9;
	overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 700px;
`;


styles.WidgetScroller = styled.div`
	width: 700px;
	height: 280px;
	display: ${props=> props.isVisible?'flex':'none'};
  flex-wrap: nowrap;
  
	
`;
styles.WeatherItem = styled.div`
	display: inline-block;
	float:left;
	width: ${props => props.isActive?'195px':'100px'};
	background: ${props => props.isActive? '#fff': '#f7f6f5'}; 
	border-left: 1px solid #c8c8c8;
	height: 250px;
	padding: 10px;
	box-shadow: inset 7px 0 9px -11px #000;
	${props => props.isActive? 'border-bottom: 3px solid #f05514': ''}; 
	:hover {
		background: #eaeaea;
	}
`


styles.DateHeading = styled.h2`
	margin: 0 0 2px;
	padding: 0;
	color: #00afbe;
`;

styles.DateSubHeading = styled.h3`
	margin: 0 0 2px;
	padding: 0;
	color: #999;
`;

styles.DateSubHeading2 = styled.h3`
	margin: 0 0 2px;
	padding: 0;
	color: #f05514;
	font-size: 16px;
`;

styles.Imagewrapper = styled.div`
	margin: 0px;
	width: 80px;
	height: 80px;
`;

styles.TempWrapper = styled.div`
	margin-top: 5px;
`;


styles.LargTemp = styled.span`
	font-size: 25px;
	color:#1f384d;
`;

styles.SmallTemp = styled.span`
	color: #999;
	top: -6px;
	font-size: 16px;
	position: relative;

`;

styles.InfoWrapper = styled.div`
	margin-top: 10px;
	font-size: 16px;
	 overflow: hidden;
white-space: pre-wrap;
word-wrap: break-word;
width: 100%;
text-transform: capitalize;
`;



export default styles;