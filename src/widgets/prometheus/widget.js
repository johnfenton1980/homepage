import genericProxyHandler from "utils/proxy/handlers/generic";

const widget = {
  api: "{url}/api/v1/{endpoint}",
  proxyHandler: genericProxyHandler,

  mappings: {
    targets: {
      endpoint: "targets?state=active",
      validate: ["data"],
    },
  },
};

export default widget;
