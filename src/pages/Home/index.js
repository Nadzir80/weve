import React from 'react';
import TextLoop from "react-text-loop";
import { NavLink } from 'react-router-dom';
import HomeHeader from '../../components/HomeHeader';
import './index.css';

import featureOneImage from '../../static/images/private.png';
import featureTwoImage from '../../static/images/uncensorable.png';
import featureThreeImage from '../../static/images/decentralized.png';

export default class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			wide: true
		}
	}
	updateDimensions = e => {
		if (window.innerWidth > 700) {
			this.setState({wide: true});
		} else {
			this.setState({wide: false});
		}
	}
	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this));
	}
	render() {
		return (
			<div className="home">
				<div>
					<span>Built on Arweave. <a href="https://arweave.org" target="_blank" rel="noopener noreferrer">Find out more.</a></span>
				</div>
				<div>
					<HomeHeader />
					<div className="sizer">
						<div className="landing">
							<div>
								<h1>Email made <br/><TextLoop interval={2000}>
								<span>safer.</span>
								<span>faster.</span>
								<span>better.</span>
								<span>easier.</span>
								<span>quicker.</span>
								<span>permanent.</span>
								</TextLoop>{" "}</h1>
								<p><span className="highlight">Weve</span> lets you communicate with <span className="highlight">safety and security</span>.<br/>Begin <span className="highlight">sending messages</span> on the Arweave permaweb.</p>
								<NavLink to="/login">Get Started</NavLink>
							</div>
							<div>
								
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="features sizer">
						<h1>End-to-end security</h1>
						<p>Weve runs on the Arweave network so messages are <i>permanent</i> and <i>uncensorable</i>.</p>
						<p>Messages are <i>encrypted</i> and delivered using <i>decentralized</i> technologies; cutting the middle-man.</p>
						<div className="feature-showcase">
							<FeatureItem image={featureOneImage} header="Encrypted" text="Weve encrypts your data with RSA-OAEP to ensure security." />
							<FeatureItem image={featureTwoImage} header="Uncensorable" text="Hosted on the Arweave permaweb, Weve can't be censored." />
							<FeatureItem image={featureThreeImage} header="Decentralized" text="Weve skips the middle-man and harnesses the blockchain." />
						</div>
					</div>
				</div>
				<div>
					<div className="tech sizer">
						<h1>How do I use Weve?</h1>
						<p>It's a simple <span className="highlight black">3-step process</span>.</p>
						{this.state.wide ? <UsageWide /> : <UsageMobile />}
					</div>
				</div>
				<div className="cta">
					<div className="sizer">
						<h1>Ready to get started?</h1>
						<a href="https://www.arweave.org/wallet" target="_blank" rel="noopener noreferrer">Get a wallet</a>
						<NavLink to="/login">Login to mail</NavLink>
					</div>
				</div>
				<div className="footer">
					<div className="sizer">
						<div>
							<h1>weve.</h1>
							<span>Built with <span role="img" aria-label="Purple heart">💜</span> in <a href="https://github.com/anish-agnihotri/weve" target="_blank" rel="noopener noreferrer">open-source</a>.</span>
						</div>
						<div>
							<h3>Quick links</h3>
							<ul>
								<li><a href="https://www.arweave.org/" target="_blank" rel="noopener noreferrer">Arweave</a></li>
								<li><a href="https://www.arweave.org/technology#permaweb" target="_blank" rel="noopener noreferrer">Permaweb</a></li>
								<li><a href="https://www.arweave.org/get-involved/community" target="_blank" rel="noopener noreferrer">Community</a></li>
								<li><a href="https://www.arweave.org/mine/learn-more" target="_blank" rel="noopener noreferrer">Learn more</a></li>
							</ul>
						</div>
						<div>
							<h3>Navigation</h3>
							<ul>
								<li><NavLink to="/">Home</NavLink></li>
								<li><NavLink to="/login">Login</NavLink></li>
								<li><NavLink to="/mail">Mail</NavLink></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class FeatureItem extends React.Component {
	render() {
		return (
			<div className="feature-item">
				<img src={this.props.image} alt="Feature item" />
				<h3>{this.props.header}</h3>
				<p>{this.props.text}</p>
			</div>
		);
	}
}

class UsageWide extends React.Component {
	render() {
		return (
			<div className="usage-wide">
				<p>Wide</p>
			</div>
		);
	}
}

class UsageMobile extends React.Component {
	render() {
		return (
			<div className="usage-thin">
				<p>Thin</p>
			</div>
		);
	}
}
