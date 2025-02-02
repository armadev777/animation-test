import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { exist } from '../utils/index';

gsap.registerPlugin(ScrollTrigger);

const gridAnimation = () => {
	const SELECTORS = {
		wrapper: '.js-grid-w',
		item: '.js-grid-item',
		itemImg: '.grid__item--img',
		itemText: '.grid__item--text',
		itemTextInner: '.js-grid-text-in',
	};

	const CLASSNAMES = {};

	const $wrappers = document.querySelectorAll(SELECTORS.wrapper);

	if (!exist($wrappers)) return;

	gsap.set(SELECTORS.itemText, {
		x: '100%',
		ease: 'power2.out',
		opacity: 0,
	});
	gsap.set(SELECTORS.itemImg, {
		y: '100%',
		opacity: 0,
		ease: 'power2.out',
	});
	gsap.set(SELECTORS.itemTextInner, {
		opacity: 0,
		y: 30,
		ease: 'power2.out',
	});

	$wrappers.forEach((wrapper) => {
		const item = wrapper.querySelectorAll(SELECTORS.item);
		const itemImg = wrapper.querySelectorAll(SELECTORS.itemImg);
		const itemText = wrapper.querySelectorAll(SELECTORS.itemText);
		const itemTextInner = wrapper.querySelectorAll(SELECTORS.itemTextInner);
		const tl = gsap.timeline();

		ScrollTrigger.create({
			animation: tl,
			trigger: item,
			start: 'top-=200 center',
			end: 'bottom',
			markers: true,
		});

		tl.to(itemText, { duration: 1.2, x: 0, opacity: 1 });
		tl.to(itemImg, { duration: 0.8, y: 0, opacity: 1 }, '-=.8');
		tl.to(itemTextInner, { duration: 0.3, y: 0, opacity: 1, stagger: 0.05 });
	});
};

export default gridAnimation;
