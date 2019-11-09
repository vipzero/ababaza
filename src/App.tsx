import React from 'react'
import {
	Container,
	CssBaseline,
	Typography,
	Button,
	createMuiTheme,
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import styled from 'styled-components'
import abaImg from './ababazaminal.png'
import aImg from './a.png'

const Title = styled(Typography)`
	font-weight: 800 !important;
	--font-sans: ;
`

const theme = createMuiTheme({
	typography: {
		fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif`,
	},
	overrides: {
		MuiButton: {
			root: {
				textTransform: 'none',
				color: 'gray',
				padding: '8px 56px !important',
			},
			outlined: {
				background: 'black',
				color: 'white',
				'&:hover': {
					background: 'black',
				},
			},
		},
	},
})

const Sign = styled.div`
	background: black;
	color: white;
	width: 40px;
	height: 40px;
	border-radius: 8px;
	text-align: center;
	padding: 4px;
`

const Item = ({ sign, char }: { sign: string; char: string }) => (
	<div style={{ width: '260px', margin: '30px' }}>
		<Sign>
			<Typography variant="h5">{sign}</Typography>
		</Sign>
		<Typography variant="h5" style={{ fontWeight: 'bold', marginTop: '10px' }}>
			{char} of Ababaza
		</Typography>
		<Typography variant="body1" style={{ color: '#444' }}>
			Aba baza Aba baza
		</Typography>
	</div>
)

const EyeCatch = styled.div`
	margin-top: 40px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		width: 460px;
	}
	${theme.breakpoints.down('sm')} {
		flex-direction: column;
		text-align: center;
		align-content: center;
		div {
			width: 100%;
		}
	}
`

const Header = styled.header`
	padding: 24px;
	border-bottom: 1px solid #ccc;
	img {
		width: 30px;
	}
	p {
		padding-top: 4px;
		color: #444;
		padding-left: 16px;
	}
`

const Row = styled.div`
	display: flex;
	justify-content: space-evenly;
	${theme.breakpoints.down('sm')} {
		flex-direction: column;
		align-content: center;
	}
`

const ScreenShot = styled.img`
	width: 100%;
	${theme.breakpoints.down('sm')} {
	}
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header>
				<div style={{ display: 'flex' }}>
					<img src={aImg} />
					<Typography>Ababaza</Typography>
					<Typography>Bazaza</Typography>
					<Typography>Aza</Typography>
				</div>
			</Header>
			<Container>
				<EyeCatch>
					<div style={{ paddingTop: '20px' }}>
						<Title variant="h2" component="h1">
							<span style={{ color: '#444' }}>Ababaza</span>
							<br />A Bab Aza
						</Title>
						<Typography
							variant="h6"
							style={{ color: '#555', margin: '20px 0' }}
						>
							Ababaza babaza baza za {'&'} abaza aza bazaba.
						</Typography>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Button size="large" variant="outlined">
								Aba baza →
							</Button>
							<Button size="large">Ababa zababaza.</Button>
						</div>
					</div>
					<div>
						<ScreenShot src={abaImg}></ScreenShot>
					</div>
				</EyeCatch>
				<div style={{ padding: '40px 0' }}>
					<Row>
						<Item sign="∋" char="A" />
						<Item sign="∀" char="B" />
					</Row>
					<Row>
						<Item sign="∠" char="B'" />
						<Item sign="×" char="Z" />
					</Row>
				</div>
			</Container>
		</ThemeProvider>
	)
}

export default App
