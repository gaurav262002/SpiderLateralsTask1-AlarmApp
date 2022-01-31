import React from "react";
import { Tab, TabView, } from "react-native-elements";
import Alarm1 from "./Level1.Alarm";
import Stopwatch1 from "./Level1.Stopwatch";
import Timer1 from "./Level1.Timer";


const Level1 = () =>{

    const [index, setIndex] = React.useState(0);

    return (
      <>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: "white",
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Alarm"
            titleStyle={{ fontSize: 11 }}
            icon={{ name: "alarm", type: "ionicon", color: "white" }}
          />
          <Tab.Item
            title="Timer"
            titleStyle={{ fontSize: 11 }}
            icon={{ name: "time", type: "ionicon", color: "white" }}
          />
          <Tab.Item
            title="Stopwatch"
            titleStyle={{ fontSize: 11 }}
            icon={{ name: "stopwatch", type: "ionicon", color: "white" }}
          />
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <Alarm1 />
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <Timer1/>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <Stopwatch1/>
          </TabView.Item>
        </TabView>
      </>
    );
}

export default Level1;