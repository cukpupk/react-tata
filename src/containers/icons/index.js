import './index.css'
import React, { Component } from 'react'
import { Icons } from '../../components/'
import {ModalDialog} from '../../components/'

// import { MarkdownElement as Markdown } from '@material-ui/docs/'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

class IconSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        };
        this.iconsComp = null;
    }

    onSelect(key) {
        this.setState({
            selected: key
        });
    }

    handleClose = () => {
        this.setState({ selected: false });
    };

    buildIconComp() {
        if (this.iconsComp) return this.iconsComp;

        const iconsComp = [];

        for (let key in Icons) {
            const Icon = Icons[key];
            const className = key === this.state.selected ? 'selected' : '';

            iconsComp.push(
                <li className={className}
                    key={'icon-' + key}
                    onClick={this.onSelect.bind(this, key)}
                >
                    <Icon />
                </li>
            );
        };

        this.iconsComp = iconsComp;

        return this.iconsComp;
    }

    buildCodeSample() {
        return (
            <SyntaxHighlighter language="javascript" style={atomDark}>
                {`
  import { Icons } from "ZapWebCommon/lib/js/"
  const IconComponent = Icons['${this.state.selected}'];
  return <div><IconComponent /></div>;
        `}
            </SyntaxHighlighter>
        )
    }

    renderModal() {
        const { selected } = this.state;

        if (!selected) return;

        const Icon = Icons[selected];

        return (
            <ModalDialog
                open={!!selected}
                onClose={this.handleClose}
                title={<div className='modal-icon-title'>Sample Usage for Icon {selected}<Icon /></div>}
                actions={[
                    {
                        label: 'Close',
                        onClick: this.handleClose
                    }
                ]}
            >
                {this.buildCodeSample()}
            </ModalDialog>
        )
    }

    render() {
        return (
            <div className='icons-section'>
                <h3>All Icons --- Available to click</h3>
                <ul className="icons-display">{this.buildIconComp()}</ul>
                {this.renderModal()}
            </div>
        )
    }
}


export default IconSection
