import React from 'react';
import PropTypes from 'prop-types';

class TabsCC extends React.Component {

    state = {
      selectedTab: 0
    }

    handleTabNavigation = (tab) => {
      this.setState({
        selectedTab: tab
      });
    }

    render() {
      const { selectedTab } = this.state;
      const {
        className,
        id,
        tabs
      } = this.props;
      return (
        <div
          className={`tabs ${className} cc-tabs`}
          id={id}
        >
          <div role="tablist">
            {
              tabs.map((tab, index)=> (
                <span
                  aria-controls={`${tab.id}-tab`}
                  aria-selected={selectedTab === index ? "true" : "false"}
                  id={tab.id} 
                  key={`tab-${index}`}
                  onClick={() => this.handleTabNavigation(index)} 
                  role="tab"
                  tabIndex={selectedTab === index ? "0" : "-1"}
                >
                  {tab.text}
                </span>
              ))
            }
          </div>
          {
            tabs.map((tab, index)=> (
              <div
                aria-labelledby={tab.id} 
                hidden={selectedTab === index ? false : true} 
                id={`${tab.id}-tab`} 
                key={`tabpanel-${index}`} 
                role="tabpanel"
              >
                {tab.content}
              </div>
            ))
          }
        </div> );
    }
}

TabsCC.propTypes = {
  tabProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    tabs: PropTypes.array.isRequired
  })
};

export default TabsCC;
