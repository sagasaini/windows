import React from 'react'
import './Company.css'
import video from '../assets/videos/WhatsApp Video 2024-06-03 at 09.12.30_d5f4398d.mp4'
import image1 from '../assets/images/image1.jpg'

const Company = () => {
  return (
    <div>
      <div className="elementor-container main-content elementor-column-gap-no" style={{display: 'flex',
    justifyContent: 'space-around',
    gap: '10px', flexDirection:'row'}}>
					<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-af1435a" data-id="af1435a" data-element_type="column">
			<div className="elementor-widget-wrap elementor-element-populated">
								<div className="elementor-element elementor-element-7395b2bd elementor-widget elementor-widget-image" data-id="7395b2bd" data-element_type="widget" data-widget_type="image.default">
				<div className="elementor-widget-container ">
															<img loading="lazy" decoding="async" width="100%" height="100%" src={image1} className="attachment-full first-image size-full" alt=""  sizes="(max-width: 1200px) 100vw, 1200px" style={{height:'400px'}}/>															</div>
				</div>
					</div>
		</div>
				<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7d534151" data-id="7d534151" data-element_type="column">
			<div className="elementor-widget-wrap elementor-element-populated">
								<div className="elementor-element elementor-element-3eebc919 gyan-title-st-line-after gyan-title-desc-left elementor-widget elementor-widget-gyan_title" data-id="3eebc919" data-element_type="widget" data-widget_type="gyan_title.default">
				<div className="elementor-widget-container">
					<div className="gyan-title">
			<div className="gyan-title-subtitle"><span>About Our Company</span></div><h2 className="gyan-title-heading">Make Your Dream Come  True</h2><div className="gyan-title-desc">Sat Kabir uPVC Windows &amp;& Doors began its business In April 2022 we started making of UPVC windows on the name of  uPVC Windows &amp;& Doors.</div>		</div>
				</div>
				</div>
				<div className="elementor-element elementor-element-47178d00 elementor-widget elementor-widget-heading" data-id="47178d00" data-element_type="widget" data-widget_type="heading.default">
				<div className="elementor-widget-container">
			<h2 className=" gyan-title-heading elementor-heading-title elementor-size-default">Why We Are The Best?</h2>		</div>
				</div>
				<div className="elementor-element elementor-element-3c4852af elementor-widget elementor-widget-text-editor" data-id="3c4852af" data-element_type="widget" data-widget_type="text-editor.default">
				<div className=" elementor-widget-container">
								<p className='gyan-title-desc'>When selecting wooden finishes and colors for doors and windows, you have a wide variety of options that can complement different design aesthetics and personal preferences. Here's an overview of the types of wooden finishes and color options available.</p>						</div>
				</div>
				<div className="elementor-element elementor-element-63e58947 elementor-widget elementor-widget-button" data-id="63e58947" data-element_type="widget" data-widget_type="button.default">
				<div className="elementor-widget-container">
					<div className="elementor-button-wrapper">
			<a href="/about-us" className="elementor-button-link elementor-button elementor-size-sm" role="button">
						<span className="elementor-button-content-wrapper">
						<span className="elementor-button-text">More About Us</span>
		</span>
					</a>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
                            <section className="elementor-section elementor-top-section elementor-element elementor-element-eeac53f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="eeac53f" data-element_type="section">
    <div className="elementor-background-overlay"></div>
    <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-489ca7b" data-id="489ca7b" data-element_type="column">
            <div className="elementor-widget-wrap">
            </div>
        </div>
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-0ab6735" data-id="0ab6735" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-8bca7c6 elementor-aspect-ratio-169 elementor-widget elementor-widget-video" data-id="8bca7c6" data-element_type="widget"data-widget_type="video.default">
                    <div className="elementor-widget-container">
                        <div className="e-hosted-video elementor-wrapper elementor-fit-aspect-ratio elementor-open-inline">
                            <video className="elementor-video responsive-video" src={video} controls controlslist="nodownload"></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-dbd3953" data-id="dbd3953" data-element_type="column">
            <div className="elementor-widget-wrap">
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Company
