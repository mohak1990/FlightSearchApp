const constants = {
  locations : [
    {key: "pun", value: "Pune (PNQ)"},
    {key: "bom", value: "Mumbai (BOM)"},
    {key: "blr", value: "Bengaluru (BLR)"},
    {key: "del", value: "Delhi (DEL)"}
  ],
  passengers: [
    {value: "1", text: "1"},
    {value: "2", text: "2"},
    {value: "3", text: "3"},
    {value: "4", text: "4"},
    {value: "5", text: "5"},
    {value: "6", text: "6"},
    {value: "7", text: "7"},
    {value: "8", text: "8"},
    {value: "9", text: "9"}
  ],
  string : {
    appName : "Flight Search App",
    flightInfo : {
      type: {
        "oneWay" : "One Way",
        "return" : "Return"
      },
      multiple: "Multiple",
      hideDetails: "Hide Details",
      showDetails: "Show Details"
    },
    confirmBox: {
      title: "Please confirm your selection",
      warning: "Please press Confirm to proceed or press Cancel to go back"
    }
  }
}

module.exports = constants;
