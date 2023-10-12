export const addZoneToolToPanel = ({ UI, tool }) => {
  UI.registerTool({
    toolName: 'AnnotationCreatePreferredZone',
    toolObject: tool,
    tooltip: 'Preferred Zone',
    buttonName: 'preferredZone',
    buttonImage: `<svg width="16" height="20" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="48" height="58" stroke="#A6A6A6" strokeWidth="2" stroke-dasharray="4 4" fill="#f1f3f5"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M15.475 24.725L7.225 16.425C6.925 16.125 6.925 15.625 7.225 15.325L8.325 14.225C8.625 13.925 9.125 13.925 9.425 14.225L15.625 20.475C15.825 20.675 16.175 20.675 16.375 20.475L28.525 8.225C28.825 7.925 29.325 7.925 29.625 8.225L30.725 9.325C31.025 9.625 31.025 10.125 30.725 10.425L16.575 24.725C16.275 25.075 15.775 25.075 15.475 24.725V24.725Z" fill="#A6A6A6"/>
    <path d="M10.4603 53.4514L5.31768 48.3088L7.44202 46.1845C7.82704 45.7995 8.23467 45.5425 8.66489 45.4136C9.09511 45.2813 9.52031 45.273 9.94049 45.3885C10.359 45.5023 10.7449 45.7358 11.0981 46.0891C11.453 46.4439 11.6857 46.8323 11.7961 47.2542C11.9066 47.6727 11.8916 48.0979 11.7509 48.5298C11.6103 48.9617 11.3433 49.3743 10.9499 49.7677L9.63917 51.0785L8.65987 50.0992L9.73961 49.0194C9.9271 48.8319 10.051 48.6428 10.1112 48.4519C10.1732 48.2594 10.1782 48.0719 10.1263 47.8895C10.0727 47.7053 9.96728 47.5346 9.80992 47.3772C9.65089 47.2182 9.48097 47.1136 9.30018 47.0633C9.11771 47.0114 8.93106 47.0173 8.74022 47.0809C8.54938 47.1445 8.36105 47.2692 8.17524 47.4551L7.56255 48.0678L11.7032 52.2084L10.4603 53.4514ZM15.073 48.8386L9.93045 43.696L12.0548 41.5717C12.4398 41.1867 12.8416 40.9239 13.2601 40.7832C13.6786 40.6393 14.0929 40.62 14.503 40.7255C14.9115 40.8293 15.2915 41.0569 15.643 41.4085C15.9996 41.7651 16.2248 42.1459 16.3185 42.551C16.4106 42.9545 16.3788 43.3646 16.2231 43.7814C16.0657 44.1966 15.7912 44.6 15.3995 44.9917L14.0561 46.3351L13.0768 45.3558L14.1892 44.2434C14.3767 44.056 14.5089 43.8752 14.5859 43.7011C14.6629 43.5236 14.6838 43.352 14.6487 43.1863C14.6119 43.0189 14.5139 42.8557 14.3549 42.6967C14.1959 42.5376 14.0318 42.4389 13.8627 42.4003C13.692 42.3602 13.517 42.3778 13.3379 42.4531C13.1571 42.5267 12.9738 42.6565 12.788 42.8423L12.1753 43.455L16.316 47.5957L15.073 48.8386ZM15.6179 43.5931L19.2489 44.6628L17.8929 46.0187L14.2871 44.9239L15.6179 43.5931ZM19.7549 44.1568L14.6123 39.0142L18.198 35.4285L19.2075 36.4379L16.8647 38.7807L17.9193 39.8353L20.0788 37.6758L21.0907 38.6878L18.9312 40.8473L19.9884 41.9044L22.3312 39.5616L23.3406 40.5711L19.7549 44.1568ZM24.119 39.7926L18.9764 34.65L22.4869 31.1396L23.4963 32.1491L21.2288 34.4165L22.2835 35.4712L24.3275 33.4272L25.3394 34.4391L23.2954 36.4831L25.362 38.5497L24.119 39.7926ZM28.2553 35.6563L23.1127 30.5137L26.6985 26.928L27.7079 27.9374L25.3651 30.2802L26.4198 31.3349L28.5793 29.1754L29.5912 30.1873L27.4317 32.3468L28.4889 33.4039L30.8317 31.0612L31.8411 32.0706L28.2553 35.6563ZM32.6195 31.2922L27.4769 26.1496L29.6013 24.0252C29.9863 23.6402 30.388 23.3774 30.8065 23.2368C31.2251 23.0928 31.6394 23.0736 32.0495 23.179C32.458 23.2828 32.838 23.5105 33.1895 23.862C33.5461 24.2186 33.7712 24.5994 33.865 25.0045C33.9571 25.408 33.9252 25.8181 33.7696 26.2349C33.6122 26.6501 33.3377 27.0535 32.9459 27.4453L31.6025 28.7887L30.6232 27.8094L31.7356 26.697C31.9231 26.5095 32.0554 26.3287 32.1324 26.1546C32.2094 25.9772 32.2303 25.8056 32.1951 25.6398C32.1583 25.4724 32.0604 25.3092 31.9014 25.1502C31.7423 24.9912 31.5783 24.8924 31.4092 24.8539C31.2384 24.8137 31.0635 24.8313 30.8844 24.9066C30.7036 24.9803 30.5203 25.11 30.3345 25.2958L29.7218 25.9085L33.8625 30.0492L32.6195 31.2922ZM33.1644 26.0466L36.7954 27.1163L35.4394 28.4723L31.8336 27.3775L33.1644 26.0466ZM37.3013 26.6103L32.1587 21.4678L35.7445 17.882L36.7539 18.8914L34.4111 21.2342L35.4658 22.2889L37.6253 20.1294L38.6372 21.1413L36.4777 23.3008L37.5349 24.358L39.8777 22.0152L40.8871 23.0246L37.3013 26.6103ZM43.5664 20.3453L41.6655 22.2462L36.5229 17.1036L38.4213 15.2052C38.9452 14.6813 39.4993 14.3331 40.0836 14.1606C40.6678 13.9849 41.2554 13.9866 41.8463 14.1657C42.4356 14.3431 42.9972 14.6988 43.5312 15.2329C44.0669 15.7685 44.4243 16.3319 44.6034 16.9228C44.7842 17.512 44.7876 18.0996 44.6135 18.6855C44.4377 19.2698 44.0887 19.823 43.5664 20.3453ZM41.8488 19.9436L42.459 19.3334C42.7469 19.0454 42.9419 18.7533 43.0441 18.457C43.1462 18.1574 43.1378 17.846 43.019 17.5229C42.9001 17.1965 42.6557 16.8483 42.2857 16.4783C41.9158 16.1084 41.5693 15.8656 41.2462 15.7501C40.9214 15.633 40.6092 15.6271 40.3095 15.7326C40.0099 15.8347 39.7128 16.033 39.4181 16.3277L38.8255 16.9203L41.8488 19.9436Z" fill="#A6A6A6"/>
    </svg>
    `,
  });

  UI.setHeaderItems((header) => {
    header.getHeader('toolbarGroup-Shapes').get('polygonToolGroupButton').insertBefore({
      type: 'toolButton',
      toolName: 'AnnotationCreatePreferredZone',
    });
  });

  UI.setHeaderItems((header) => {
    const customZoneButton = {
      type: 'toolButton',
      toolName: 'AnnotationCreatePreferredZone',
    };
    const items = header.getItems();
    items.splice(12, 0, customZoneButton);
  });
};
