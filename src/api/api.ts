import utils from "../utils/utils";

export type GroupsBySensor = {
  customer: string;
  groupsBySensor: Record<string, string[]>;
};

export default {
  fetchGroupsBySensor: async () => {
    await utils.simulateRequest(utils.generateRandomNumber(2000, 3500));
    const groupsBySensor: GroupsBySensor = {
      customer: "nimbus",
      groupsBySensor: {
        FG_Sensor_11: ["FG_11_Grp_1"],
        FSG_Sensor_24: ["FSG_24_Grp_1", "FSG_24_Grp_2"],
        FSTG_Sensor_46: ["FSTG_46_Grp_1", "FSTG_46_Grp_2", "FSTG_46_Grp_3"],
        SG_Sensor_38: ["SG_38_Grp_1"],
        SG_Sensor_93: ["SG_93_Grp_1"],
        TG_Sensor_86: ["TG_86_Grp_1"],
        TG_Sensor_94: ["TG_94_Grp_1", "TG_94_Grp_2"],
      },
    };
    return groupsBySensor;
  },
};
