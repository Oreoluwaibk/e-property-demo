import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#2A4BA0',
    // : "#F2F4F7",
    colorPrimaryBg: "#2A4BA0",
    fontFamily: "'GeistSans', 'GeistSans Fallback'",
  },
  components: {
    Input: {
      colorTextPlaceholder: "#6B6B6B",
      fontSizeLG: 14,
      colorBorder: "#C4C4C4",
      controlHeightLG: 50,
      borderRadius: 5,
      borderRadiusLG:5,
      colorBgContainer: "#F5F5F5"
    },
    InputNumber: {
      colorTextPlaceholder: "#6B6B6B",
      fontSizeLG: 14,
      colorBorder: "#C4C4C4",
      controlHeightLG: 50,
      borderRadius: 5,
      borderRadiusLG:5,
      colorBgContainer: "#F5F5F5",
    },
    DatePicker: {
      colorTextPlaceholder: "#6B6B6B",
      fontSizeLG: 14,
      colorBorder: "#C4C4C4",
      controlHeightLG: 50,
      borderRadius: 5,
      borderRadiusLG:5,
      colorBgContainer: "#F5F5F5",
    },
    Select: {
      colorTextPlaceholder: "#6B6B6B",
      colorBorder: "#C4C4C4",
      controlHeightLG: 50,
      controlHeight: 50,
      borderRadius: 5,
      borderRadiusLG:5,
      colorBgContainer: "#F5F5F5",
      fontSizeLG: 14,
    },
    Form: {
      labelColor: "#191919",
      labelFontSize: 14,
    },
    Button: {
      borderRadius: 5,
      controlHeight: 50
    },
    Upload:{
      fontSize:14
    },
    Tabs: {
      itemColor: "#373737",
      fontSize: 16,
      fontWeightStrong: 700,
      colorText: "#373737",
    }   
  }
};
