import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import styles from '../styles/Home.module.css';
import {useSelector} from "react-redux"; 
export default function Home({products}) {
	
	return (
		<div className={styles.container}>
			
			<section className="full-bg video-bg mt-5" >
				<div className="full-bg-overlay black-pat text-center">
					<div className="pat">
						<h2 >CHIDES <span className="highlight">FOODS</span></h2>
						<p >Prepared by world famous cooks</p>
					</div>
					<video src="/video.mp4" loop autoPlay muted>

					</video>
				</div>
			</section>
			<section style={{ marginTop: "5rem" }} id="home" className="gallery section text-center">
				<div className="container">
					<div className="row">
						<div className="section-title">
							<h1>Welcome To Chides Foods</h1>

							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...
							</p>
						</div>

						{products.length === 0 ? <div className="alert alert-warning-outline">No Product Found</div>
							: products.map(product => {
							return	<div key={product._id} className="col-md-4 col-sm-6 col-xs-6">
									<div className="main-deal-products">
									<Link href={`/product/${product._id}`} passHref><img src={product.image} className="product-image" alt="" /></Link>
										<h4>{product.title}</h4>
										<span className="mg-price">NGN {product.price}</span>
										<img src="/images/hot-deals.png" className="hot-deals" alt="deals" />
										<img src="/images/featured.png" className="featured-gallery" alt="deals" />
									</div>
								</div>
								
							})



						}


					</div>
				</div>
			</section>


			<section id="services" style={{ backgroundColor: "orangered", color: "black" }} className="services section ">
				<div className="container">
					<div className="row">
						<div className="section-title">
							<h1 style={{ color: "black" }}>Our Services</h1>

							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...
							</p>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="best-service text-center">
								<div className="best-service-img">
									<i className="glyph-icon flaticon-bread25"></i>
								</div>
								<h4>Steaks</h4>
								<p>
									Grenadier jackfish arowana temperate perch bonytongue seamoth sea devil longfin Alaska blackfish yellow weaver. Elephant fish great white shark.
								</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="best-service text-center">
								<div className="best-service-img">
									<i className="glyph-icon flaticon-hamburger10"></i>
								</div>
								<h4>Hot Burger</h4>
								<p>
									Grenadier jackfish arowana temperate perch bonytongue seamoth sea devil longfin Alaska blackfish yellow weaver. Elephant fish great white shark.
								</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="best-service text-center">
								<div className="best-service-img">
									<i className="glyph-icon flaticon-heating5"></i>
								</div>
								<h4>Delicous Food</h4>
								<p>
									Grenadier jackfish arowana temperate perch bonytongue seamoth sea devil longfin Alaska blackfish yellow weaver. Elephant fish great white shark.
								</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="best-service text-center">
								<div className="best-service-img">
									<i className="glyph-icon flaticon-pizza3"></i>
								</div>
								<h4>Fresh Pizza</h4>
								<p>
									Grenadier jackfish arowana temperate perch bonytongue seamoth sea devil longfin Alaska blackfish yellow weaver. Elephant fish great white shark.
								</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="best-service text-center">
								<div className="best-service-img">
									<i className="glyph-icon flaticon-plate7"></i>
								</div>
								<h4>Hot Dishes</h4>
								<p>
									Grenadier jackfish arowana temperate perch bonytongue seamoth sea devil longfin Alaska blackfish yellow weaver. Elephant fish great white shark.
								</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="best-service text-center">
								<div className="best-service-img">
									<i className="glyph-icon flaticon-steak"></i>
								</div>
								<h4>Chicken</h4>
								<p>
									Grenadier jackfish arowana temperate perch bonytongue seamoth sea devil longfin Alaska blackfish yellow weaver. Elephant fish great white shark.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>



			<section id="our-menu" className="main-menu section">
				<div className="container">
					<div className="row">
						<div className="section-title">
							<h1>Our Menu</h1>

							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...
							</p>
						</div>
						<div className="food-menu-list">
							<div className="menu-list">
								<div className="row">
									<div className="col-md-4 col-sm-6 col-xs-6">
										<div className="ss-menu-item">
											<div className="pull-left menu-img">
												<img className="img-circle" src="images/menu/1.jpg" alt="" />
											</div>
											<div className="menu-detail">
												<h5>Double Grape Martini</h5>
												<p>Aenean commodo ligula eget dolor aenean massa. Cum sociis noque penatibus et magnis dis.</p>
												<div className="menu-price">
													<span className="food-menu-price">$458</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-sm-6 col-xs-6">
										<div className="ss-menu-item">
											<div className="pull-left menu-img">
												<img className="img-circle" src="images/menu/2.jpg" alt="" />
											</div>
											<div className="menu-detail">
												<h5>Huckleberry Limenade</h5>
												<p>Aenean commodo ligula eget dolor aenean massa. Cum sociis noque penatibus et magnis dis.</p>
												<div className="menu-price">
													<span className="food-menu-price">$74</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-sm-6 col-xs-6">
										<div className="ss-menu-item">
											<div className="pull-left menu-img">
												<img className="img-circle" src="images/menu/3.jpg" alt="" />
											</div>
											<div className="menu-detail">
												<h5>Angry Ball</h5>
												<p>Aenean commodo ligula eget dolor aenean massa. Cum sociis noque penatibus et magnis dis.</p>
												<div className="menu-price">
													<span className="food-menu-price">$13</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-sm-6 col-xs-6">
										<div className="ss-menu-item">
											<div className="pull-left menu-img">
												<img className="img-circle" src="images/menu/4.jpg" alt="" />
											</div>
											<div className="menu-detail">
												<h5>Tiramisu A La Cousine</h5>
												<p>Aenean commodo ligula eget dolor aenean massa. Cum sociis noque penatibus et magnis dis.</p>
												<div className="menu-price">
													<span className="food-menu-price">$587</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-sm-6 col-xs-6">
										<div className="ss-menu-item">
											<div className="pull-left menu-img">
												<img className="img-circle" src="images/menu/5.jpg" alt="" />
											</div>
											<div className="menu-detail">
												<h5>Double Grape Martini</h5>
												<p>Aenean commodo ligula eget dolor aenean massa. Cum sociis noque penatibus et magnis dis.</p>
												<div className="menu-price">
													<span className="food-menu-price">$78</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-sm-6 col-xs-6">
										<div className="ss-menu-item">
											<div className="pull-left menu-img">
												<img className="img-circle" src="images/menu/6.jpg" alt="" />
											</div>
											<div className="menu-detail">
												<h5>Ruban Rouge</h5>
												<p>Aenean commodo ligula eget dolor aenean massa. Cum sociis noque penatibus et magnis dis.</p>
												<div className="menu-price">
													<span className="food-menu-price">$36</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-sm-6 col-xs-6">
										<div className="ss-menu-item">
											<div className="pull-left menu-img">
												<img className="img-circle" src="images/menu/7.jpg" alt="" />
											</div>
											<div className="menu-detail">
												<h5>Ice Cream</h5>
												<p>Aenean commodo ligula eget dolor aenean massa. Cum sociis noque penatibus et magnis dis.</p>
												<div className="menu-price">
													<span className="food-menu-price">$95</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-sm-6 col-xs-6">
										<div className="ss-menu-item">
											<div className="pull-left menu-img">
												<img className="img-circle" src="images/menu/8.jpg" alt="" />
											</div>
											<div className="menu-detail">
												<h5>Grape Martini</h5>
												<p>Aenean commodo ligula eget dolor aenean massa. Cum sociis noque penatibus et magnis dis.</p>
												<div className="menu-price">
													<span className="food-menu-price">$57</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>

		</div>
	)
}


export const getServerSideProps = async () =>{
	const {data} = await axios.get("https://chidesfoods.netlify.app/api/products")
	return {
		props:{
			products : data
	}
}

} 
