import React from 'react'
import {
	Container,
	CssBaseline,
	Typography,
	Grid,
	Button,
	createMuiTheme,
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import styled from 'styled-components'
import abaImg from './ababaza.png'

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
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	${theme.breakpoints.down('sm')} {
		flex-direction: column;
		text-align: center;
		align-content: center;
	}
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container>
				<EyeCatch>
					<div style={{ paddingTop: '20px', width: '460px' }}>
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
							<Button size="large">Adaba zadabaza.</Button>
						</div>
					</div>
					<div style={{ width: '460px' }}>
						<img src={abaImg} style={{ width: '500px' }}></img>
					</div>
				</EyeCatch>
				<div style={{ padding: '40px 0' }}>
					<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
						<Item sign="∋" char="A" />
						<Item sign="∀" char="B" />
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
						<Item sign="∠" char="B'" />
						<Item sign="×" char="Z" />
					</div>
				</div>
			</Container>
		</ThemeProvider>
	)
}

export default App
