import React from "react";
import { Tab,TabView } from "react-native-elements";
import Alarm2 from "./Level2.Alarm";
import Stopwatch2 from "./Level2.Stopwatch";
import Timer2 from "./Level2.Timer";


const Level2 = () =>{

    const [index, setIndex] = React.useState(0);

    return(
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
            <Alarm2 />
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <Timer2/>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <Stopwatch2/>
          </TabView.Item>
        </TabView>
      </>
    );
}

export default Level2;