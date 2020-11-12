// import React, { Fragment, useState } from 'react';
// import styled from 'styled-components';

// import { createTabClickAction } from '17media-browser-spy';
// import { trackingSource } from '@vmo/share/17appTrack';

// interface Props {
//   active: string;
//   tabKey?: string;
//   title?: string;
//   tabText?: string;
//   className?: string;
//   itemEndRow?: number[];
//   showTab?: boolean;
// }
// export const DivWrapTab = styled.div``;
// export const DivWrapTabMenu = styled.div``;
// export const UlLine = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
//   display: flex;
//   justify-content: center;
// `;
// export const LiTab:any = styled.li`
//   flex-grow: 1;
//   cursor: pointer;
// `;
// export const LiTabActive = styled(LiTab)``;
// export const DivTabContent = styled.div``;

// const TabsFC: React.FC<Props> = ({
//   children,
//   active,
//   itemEndRow = [],
//   className,
//   showTab = true,
// }) => {
//   const [activeTab, setActiveTab] = useState(active);

//   const childrenArray = React.Children.toArray(children);
//   let start = 0;
//   const tabGroups = itemEndRow.length
//     ? itemEndRow.map(i => {
//         const items = childrenArray.slice(start, i);
//         start = i;
//         return { groupName: `group${i}`, items };
//       })
//     : [{ groupName: 'group1', items: childrenArray }];
//   return (
//     <DivWrapTab className={className}>
//       <DivWrapTabMenu>
//         {childrenArray.map(item => {
//           const childItem = item as React.ReactElement;
//           const { tabKey, countdown } = childItem.props;
//           if (tabKey !== activeTab) return undefined;
//           return <Fragment key={`${tabKey}_countdown`}>{countdown}</Fragment>;
//         })}
//         {tabGroups.map(group => {
//           return (
//             <UlLine key={group.groupName}>
//               {group.items.map(tab => {
//                 const item = tab as React.ReactElement;
//                 const { tabKey, title, tabText, ranks } = item.props;
//                 if (showTab) {
//                   return tabKey === activeTab ? (
//                     <LiTabActive
//                       onClick={() => {
//                         setActiveTab(tabKey);
//                         trackingSource.track(createTabClickAction('', tabText));
//                       }}
//                       key={tabKey}
//                     >
//                       {title}
//                       {ranks ? ranks.active : null}
//                     </LiTabActive>
//                   ) : (
//                     <LiTab
//                       onClick={() => {
//                         setActiveTab(tabKey);
//                         trackingSource.track(createTabClickAction('', tabText));
//                       }}
//                       key={tabKey}
//                     >
//                       {title}
//                       {ranks ? ranks.inactive: null}
//                     </LiTab>
//                   );
//                 }
//                 return null;
//               })}
//             </UlLine>
//           );
//         })}
//       </DivWrapTabMenu>
//       <DivTabContent>
//         {childrenArray.map(item => {
//           const childItem = item as React.ReactElement;
//           const { tabKey } = childItem.props;
//           if (tabKey !== activeTab) return undefined;
//           const child = item as React.ReactElement;

//           return child.props.children;
//         })}
//       </DivTabContent>
//     </DivWrapTab>
//   );
// };

// export const Tabs: any = styled(TabsFC)``;

// export default Tabs;


import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import { createTabClickAction } from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';

interface Props {
  active: string;
  tabKey?: string;
  title?: string;
  tabText?: string;
  className?: string;
  itemEndRow?: number[];
  showTab?: boolean;
}
export const DivWrapTab = styled.div``;
export const DivWrapTabMenu = styled.div``;
export const UlLine = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
`;
export const LiTab = styled.li`
  flex-grow: 1;
  cursor: pointer;
`;
export const LiTabActive = styled(LiTab)``;
export const DivTabContent = styled.div``;

const TabsFC: React.FC<Props> = ({
  children,
  active,
  itemEndRow = [],
  className,
  showTab = true,
}) => {
  const [activeTab, setActiveTab] = useState(active);

  const childrenArray = React.Children.toArray(children);
  let start = 0;
  const tabGroups = itemEndRow.length
    ? itemEndRow.map(i => {
        const items = childrenArray.slice(start, i);
        start = i;
        return { groupName: `group${i}`, items };
      })
    : [{ groupName: 'group1', items: childrenArray }];
  return (
    <DivWrapTab className={className}>
      <DivWrapTabMenu>
        {childrenArray.map(item => {
          const childItem = item as React.ReactElement;
          const { tabKey, countdown } = childItem.props;
          if (tabKey !== activeTab) return undefined;
          return <Fragment key={`${tabKey}_countdown`}>{countdown}</Fragment>;
        })}
        {childrenArray.map(item => {
          const childItem = item as React.ReactElement;
          const { tabKey, teamBg } = childItem.props;
          if (tabKey !== activeTab) return undefined;
          return <Fragment key={`${tabKey}_teamBg`}>{teamBg}</Fragment>;
        })}
        {tabGroups.map(group => {
          return (
            <UlLine key={group.groupName}>
              {group.items.map(tab => {
                const item = tab as React.ReactElement;
                const { tabKey, title, tabText, ranks, crown, vs } = item.props;
                if (showTab) {
                  return tabKey === activeTab ? (
                    <LiTabActive
                      onClick={() => {
                        setActiveTab(tabKey);
                        trackingSource.track(createTabClickAction('', tabText));
                      }}
                      key={tabKey}
                    >
                      {title}
                      {ranks ? ranks.active : null}
                      {crown ? crown.active : null}
                      {vs ? vs : null}
                    </LiTabActive>
                  ) : (
                    <LiTab
                      onClick={() => {
                        setActiveTab(tabKey);
                        trackingSource.track(createTabClickAction('', tabText));
                      }}
                      key={tabKey}
                    >
                      {title}
                      {ranks ? ranks.inactive: null}
                      {crown ? crown.inactive : null}
                      {vs ? vs : null}
                    </LiTab>
                  );
                }
                return null;
              })}
            </UlLine>
          );
        })}
      </DivWrapTabMenu>
      <DivTabContent>
        {childrenArray.map(item => {
          const childItem = item as React.ReactElement;
          const { tabKey } = childItem.props;
          if (tabKey !== activeTab) return undefined;
          const child = item as React.ReactElement;

          return child.props.children;
        })}
      </DivTabContent>
    </DivWrapTab>
  );
};

export const Tabs = styled(TabsFC)``;

export default Tabs;