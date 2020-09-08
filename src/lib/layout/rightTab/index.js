import eventBus from "../../mainEvent";
import {$createElement as h} from "../../utils/$createElement";
import sizeConfig from "../../config/size.config";
import colorConfig from "../../config/color.config";

import './index.scss'

const midTopHeight = sizeConfig.midTop.height;
const midRightWidth = sizeConfig.midRight.width;


function mountRightBox(mountDOM, themeConfig = {}) {
  const mountRightBox = h('div',
      {
        className: ['right-box'],
        style: {
          width: midRightWidth - 1 + 'px',
          height: 100 % +'px',
        }
      },
      [
        h('div',
            {
              className: ['tab-btn-box'],
              style: {
                height: midTopHeight + 'px'
              }
            },
            ['标题属性', '组件属性'].map((item,index) => {
              return h('button',
                  {
                    className: ['right-tab-btn' ],
                    style: {
                      color: colorConfig.darkFontColor,
                    },
                    on: {
                      click: () => {
                        eventBus.emit('toggleTab', index)
                      }
                    }
                  },
                  [
                    item
                  ])
            })
        ),
        h('div',
            {
              className: ['tab-box'],
            },
            []
        )
      ]
  );
  mountDOM.appendChild(mountRightBox);
}

export default mountRightBox