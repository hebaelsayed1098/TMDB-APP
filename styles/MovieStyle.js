import { StyleSheet, Dimensions } from "react-native";
const deviceWidth = Math.round(Dimensions.get("window").width);
const offset = 70;
const radius = 20;
export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 25,
  },
  cardContainer: {
    flex: 1,
    width: deviceWidth - offset,
    backgroundColor: "#DCDCDC",

    borderRadius: radius,
    paddingBottom: "3%",
    paddingRight: "3%",
    paddingLeft: "3%",
    marginBottom: "2%",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 500,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    paddingTop: "4%",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    fontFamily: "sans-serif-condensed",
  },
  overviewStyle: {
    paddingTop: "5%",
    fontWeight: "400",
    fontSize: 16,
    fontFamily: "sans-serif-condensed",
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  dateStyle: {
    paddingTop: "5%",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "sans-serif-condensed",
    color: "gray",
  },
});
