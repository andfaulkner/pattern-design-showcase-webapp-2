import Lightbox from 'react-images';

export default class ModalPhotoGallery extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Lightbox photos={PHOTO_SET}/>
		);
	}

};