import React from 'react';



export default class PostForm extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
          title: props.post ? props.post.title : '',
          category: props.post ? props.post.category : '',
          content: props.post ? props.post.content : '',
          error: ''
        };
        
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };
    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({ content }));
    };
    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(() => ({ category }));
    };

    onSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.title || !this.state.category || !this.state.content ) {
          this.setState(() => ({ error: 'Please provide title, category and content.' }));
        } else {
          this.setState(() => ({ error: '' }));
          this.props.onSubmit({
            title: this.state.title,
            category: this.state.category,
            content: this.state.content
          });
        }
      };

      render() {
        return (
          <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form className="PostForm" onSubmit={this.onSubmit}>
                <input 
                    autoFocus
                    type="text" 
                    placeholder="Type the post title"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <input 
                    type="text" 
                    placeholder="Type the post category" 
                    value={this.state.category}
                    onChange={this.onCategoryChange}

                />
                <textarea 
                    placeholder="Type the post content"
                    value={this.state.content}
                    onChange={this.onContentChange}
                >
                </textarea>
                <button>Save</button>
            </form>
          </div>
        )
      }

}