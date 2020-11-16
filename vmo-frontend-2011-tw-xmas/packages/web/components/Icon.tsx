import React, { ReactNode } from 'react';
import IconBellflower from '../static/icons/icon_bellflower.svg';
import IconMarigold from '../static/icons/icon_marigold.svg';
import IconRose from '../static/icons/icon_rose.svg';
import IconSakura from '../static/icons/icon_sakura.svg';

type Props = {
  fill?: string;
};

const Icon: React.FC<Props> = ({ fill, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 20 21" {...props}>
    <defs>
      <path
        id="prefix__b"
        d="M10 20c-5.522 0-10-4.32-10-9.644v-.712C0 4.32 4.478 0 10 0s10 4.32 10 9.644v.712C20.009 15.68 15.53 20 10 20z"
      />
      <filter
        id="prefix__a"
        width="105%"
        height="110%"
        x="-2.5%"
        y="-2.5%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feColorMatrix
          in="shadowOffsetOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
      </filter>
      <path
        id="prefix__c"
        d="M2.332 3.78L6.814 0l4.47 3.76 2.24-2.388-1 4.362c-1.84-.19-3.807-.393-5.711-.393-1.903 0-3.768.14-5.709.393L.1 1.397 2.332 3.78zm3.524-.092c0 .5.428.905.956.905.527 0 .955-.405.955-.905s-.428-.904-.955-.904c-.528 0-.956.405-.956.904z"
      />
      <path
        id="prefix__e"
        d="M5.264.102l-.119.002C4.191.119 3.244.169 2.288.25l-.111.01C1.486.32.79.397.087.49l.035.153.001.007.36 1.422c.409-.052.731-.525 1.134-.566.082-.009.054-.287.135-.294 1.34-.13 2.66 0 3.998 0s2.657-.13 3.998 0c.08.007.04.285.121.294.403.04.739.514 1.146.566L11.376.65l.002-.007.036-.154c-.705-.092-1.4-.169-2.091-.23L9.212.25A41.181 41.181 0 0 0 6.355.104l-.12-.002a41.516 41.516 0 0 0-.971 0z"
      />
      <path
        id="prefix__g"
        d="M.117 1.135c0 .57.468 1.035 1.042 1.035a1.04 1.04 0 0 0 1.042-1.035A1.04 1.04 0 0 0 1.159.1 1.04 1.04 0 0 0 .117 1.135z"
      />
      <path
        id="prefix__i"
        d="M.07.898a.85.85 0 0 0 .852.846.85.85 0 0 0 .852-.846.85.85 0 0 0-.852-.845.85.85 0 0 0-.851.845z"
      />
      <path
        id="prefix__k"
        d="M.07.898a.85.85 0 0 0 .853.846.85.85 0 0 0 .851-.846.85.85 0 0 0-.851-.845.85.85 0 0 0-.852.845z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
      <use fill="#FFF" xlinkHref="#prefix__b" />
      <path
        fill={fill}
        d="M10.095 18.762c-4.79 0-8.666-3.74-8.666-8.345v-.644c0-4.612 3.884-8.344 8.666-8.344 4.79 0 8.667 3.74 8.667 8.344v.644c.008 4.613-3.876 8.345-8.667 8.345z"
      />
      <g transform="translate(3.323 6.738)">
        <mask id="prefix__d" fill="#fff">
          <use xlinkHref="#prefix__c" />
        </mask>
        <path
          fill="#FFF"
          d="M-4.684 10.518h22.991V-4.783H-4.684z"
          mask="url(#prefix__d)"
        />
      </g>
      <g transform="translate(4.387 12.176)">
        <mask id="prefix__f" fill="#fff">
          <use xlinkHref="#prefix__e" />
        </mask>
        <path
          fill="#FFF"
          d="M-4.698 6.855h20.895v-11.54H-4.698z"
          mask="url(#prefix__f)"
        />
      </g>
      <g transform="translate(8.998 5.083)">
        <mask id="prefix__h" fill="#fff">
          <use xlinkHref="#prefix__g" />
        </mask>
        <path
          fill="#FFF"
          d="M-4.667 6.954H6.985V-4.684H-4.667z"
          mask="url(#prefix__h)"
        />
      </g>
      <g transform="translate(15.855 6.974)">
        <mask id="prefix__j" fill="#fff">
          <use xlinkHref="#prefix__i" />
        </mask>
        <path
          fill="#FFF"
          d="M-3.838 5.653h9.52v-9.509h-9.52z"
          mask="url(#prefix__j)"
        />
      </g>
      <g transform="translate(2.495 6.974)">
        <mask id="prefix__l" fill="#fff">
          <use xlinkHref="#prefix__k" />
        </mask>
        <path
          fill="#FFF"
          d="M-3.838 5.653h9.52v-9.509h-9.52z"
          mask="url(#prefix__l)"
        />
      </g>
    </g>
  </svg>
);

Icon.defaultProps = {
  fill: '#ccc',
};

export default Icon;

type teamIconsProps = {
  [key: string]: ReactNode | null;
};

export const teamIcons: teamIconsProps = {
  team1: <IconSakura />,
  team2: <IconMarigold />,
  team3: <IconRose />,
  team4: <IconBellflower />,
  team0: null,
};
