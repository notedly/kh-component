

const KhComponent = {} ;


KhComponent.tabmenu = ( target , options ) => {

	class Tabmenu {
		constructor( tg, opt ){

			let wrapper = null ;

			if( tg ) {
				wrapper = tg ;
			} else {
				return console.log(`${tg} : 엘리먼트 오류`) ;
			}

			this.tag = {
				wrapper : wrapper ,
				btns : wrapper.querySelectorAll('.tab-btns > a') ,
				contents : wrapper.querySelectorAll('.tab-contents > section') ,
			}

			this.val = {
				idx : 0 ,	// 클릭한 탭 번호
				prevIdx : 0 ,	// 클릭 하기 전 탭 번호
				len : this.tag.btns.length
			}

			this.opt = {
				initTab : opt.initTab > this.val.len || !opt.initTab ? 0 : opt.initTab ,
				moveBtn : opt.moveBtn || false ,
			}

			console.log( this.opt ) ;

			this.init() ;
			this.setOpt() ;
			this.setEvt() ;
		}

		init = () => {
			this.active( this.opt.initTab ) ;
		} // end of init

		setOpt = () => {
			console.log( 'setOpt in' ) ;

			let { tag , opt } = this ;

			console.log( tag, opt ) ;

			if( opt.moveBtn ) {
				console.log( 'moveBtn inininin' );
			}

		}

		setEvt = () => {

			[].forEach.call( this.tag.btns, ( btn, idx ) => {
				btn.addEventListener('click', e => {
					if( idx == this.val.prevIdx ) return ;
					this.val.idx = idx ;
					this.active( this.val.idx ) ;
				}) ;
			}) ;

		} // end of evt

		active = ( crntIdx ) => {
			console.log( 'click idx : ', crntIdx, 'prev idx :', this.val.prevIdx ) ;

			this.tag.btns[this.val.prevIdx].classList.remove('active') ;
			this.tag.contents[this.val.prevIdx].classList.remove('active') ;

			this.tag.btns[crntIdx].classList.add('active') ;
			this.tag.contents[crntIdx].classList.add('active') ;

			this.val.prevIdx = crntIdx ;
		}

	}

	return new Tabmenu ( target , options ) ;
}



export { KhComponent } ;