import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './tab';
import "../../../styles/css/components/userComponents/tabs.css"


class TabsComponent extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
    this.props.onClickTabItem(tab)
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child, i) => {

            const { label } = child.props;

            return (
              <Tab
                key = {i}
                activeTab={activeTab}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab)
            {
              return null;
            }
            else {
              return child.props.children;
            }
          })}
        </div>
      </div>
    );
  }
}

export default TabsComponent;
