// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { <%- filename %> } from '<%-relativeFilePath%>';

describe('<%-filename%> test', () => {
  it('<%- filename %> should match snapshot', () => {
    const view = mount(
      <<%- filename%>
        <%- componentProps.map(componentMeta => {
          return ""+componentMeta.propName+"={"+
            // (
            //   (componentMeta.propType === 'string')
            //     ?
            //   "'"
            //     :
            //   ''
            // )
            //   +
            (
              (componentMeta.propType === 'shape' || componentMeta.propType === 'string') ?
                JSON.stringify(componentMeta.propDefaultValue,null,1)
                :
                componentMeta.propDefaultValue
            )
            //   +
            // (
            //   (componentMeta.propType === 'string')
            //     ?
            //   "'"
            //     :
            //   ''
            // )
              +
            "}"
        }  ).join('\n\t\t\t\t') %>
      />);
    expect(view).toMatchSnapshot();
  });
});
