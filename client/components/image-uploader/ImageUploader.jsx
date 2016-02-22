import {DropzoneComponent} from 'react-dropzone-component';

var ImageUploader = React.createClass({
	componentConfig: {
    iconFiletypes: ['.jpg', '.png', '.gif', '.svg'],
    showFiletypeIcon: true,
    postUrl: '/api/image/upload'
	},
	djsConfig: {
    addRemoveLinks: true,
    params: {
        myParam: 'Hello from a parameter!',
        anotherParam: 43
    }
	},
	render: function() {
		return (
			<DropzoneComponent
				config={this.componentConfig} 
				// eventHandlers={eventHandlers} 
				djsConfig={this.djsConfig}
			/>
		);
	}
});

module.exports = ImageUploader;
