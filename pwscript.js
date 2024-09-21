var savedSettings = null;

try {
  //chrome.storage.sync.clear();

  chrome.storage.sync.get().then((items) => {
    var jsonSettingsVal = items["PWSimplifySettings"];
    if (jsonSettingsVal) {
      savedSettings = JSON.parse(jsonSettingsVal);

      //if settings are available
      if (savedSettings) {
        //NAV
        var showBanner = savedSettings["showBanner"]; //#banner_container {display: none !important; }
        if (showBanner != null && showBanner == false) {
          document.getElementById("banner_container").style.display = "none";
        }

        //alert(jsonSettingsVal);

        var hoverTimeLinks = savedSettings["hoverTimeLinks"]; //#hoverlinks {display: none !important; }
        if (hoverTimeLinks != null && hoverTimeLinks == false) {
          var hoverlnks = document.getElementById("hoverlinks");
          if (hoverlnks) {
            hoverlnks.style.display = "none";
          }
        }

        var fixSliderHover = savedSettings["fixSliderHover"];
        if (fixSliderHover) {
          const sliderHandleObj =
            document.getElementsByClassName("ui-slider-handle");
          if (sliderHandleObj) {
            var sliderBtn = sliderHandleObj[0];
            if (sliderBtn) {
              sliderBtn.addEventListener("mouseout", (event) => {
                sliderHandleObj[0].blur();
              });
            }
          }
        }

        //MODELS - Globals
        var modelShowCFS = savedSettings["modelShowCFS"];
        if (modelShowCFS != null && modelShowCFS == false) {
          document.querySelector('[data-model="cfs"]').style.display = "none";
        }

        var modelShowECMWF = savedSettings["modelShowECMWF"];
        if (modelShowECMWF != null && modelShowECMWF == false) {
          document.querySelector('[data-model="ecmwf_full"]').style.display =
            "none";
        }

        var modelShowECMWFAIFS = savedSettings["modelShowECMWFAIFS"];
        if (modelShowECMWFAIFS != null && modelShowECMWFAIFS == false) {
          document.querySelector('[data-model="ecmwf_aifs"]').style.display =
            "none";
        }

        var modelShowGFS = savedSettings["modelShowGFS"];
        if (modelShowGFS != null && modelShowGFS == false) {
          document.querySelector('[data-model="gfs"]').style.display = "none";
        }

        var modelShowGraphCastGFS = savedSettings["modelShowGraphCastGFS"];
        if (modelShowGraphCastGFS != null && modelShowGraphCastGFS == false) {
          document.querySelector('[data-model="graphcast_gfs"]').style.display =
            "none";
        }

        var modelShowGDPS = savedSettings["modelShowGDPS"];
        if (modelShowGDPS != null && modelShowGDPS == false) {
          document.querySelector('[data-model="gdps"]').style.display = "none";
        }

        var modelShowICON = savedSettings["modelShowICON"];
        if (modelShowICON != null && modelShowICON == false) {
          document.querySelector('[data-model="icon"]').style.display = "none";
        }

        var modelShowUkmet = savedSettings["modelShowUkmet"];
        if (modelShowUkmet != null && modelShowUkmet == false) {
          document.querySelector('[data-model="ukmet"]').style.display = "none";
        }

        //MODELS - Regional
        var modelShowNAM = savedSettings["modelShowNAM"];
        if (modelShowNAM != null && modelShowNAM == false) {
          document.querySelector('[data-model="nam"]').style.display = "none";
        }

        var modelShowRAP = savedSettings["modelShowRAP"];
        if (modelShowRAP != null && modelShowRAP == false) {
          document.querySelector('[data-model="rap"]').style.display = "none";
        }

        var modelShowRDPS = savedSettings["modelShowRDPS"];
        if (modelShowRDPS != null && modelShowRDPS == false) {
          document.querySelector('[data-model="rdps"]').style.display = "none";
        }

        //MODELS - CAMs
        var modelShowHRRR = savedSettings["modelShowHRRR"];
        if (modelShowHRRR != null && modelShowHRRR == false) {
          document.querySelector('[data-model="hrrr"]').style.display = "none";
        }

        var modelShowNAM3km = savedSettings["modelShowNAM3km"];
        if (modelShowNAM3km != null && modelShowNAM3km == false) {
          document.querySelector('[data-model="nam4km"]').style.display =
            "none";
        }

        var modelShowHRWWRFARW = savedSettings["modelShowHRWWRFARW"];
        if (modelShowHRWWRFARW != null && modelShowHRWWRFARW == false) {
          document.querySelector('[data-model="hrwarw"]').style.display =
            "none";
        }

        var modelShowHRWWRFNSSL = savedSettings["modelShowHRWWRFNSSL"];
        if (modelShowHRWWRFNSSL != null && modelShowHRWWRFNSSL == false) {
          document.querySelector('[data-model="hrwnssl"]').style.display =
            "none";
        }

        var modelShowFV3 = savedSettings["modelShowFV3"];
        if (modelShowFV3 != null && modelShowFV3 == false) {
          document.querySelector('[data-model="hrwfv3"]').style.display =
            "none";
        }

        var modelShowRRFSA = savedSettings["modelShowRRFSA"];
        if (modelShowRRFSA != null && modelShowRRFSA == false) {
          document.querySelector('[data-model="rrfs_a"]').style.display =
            "none";
        }

        var modelShowNSSLMPASHN = savedSettings["modelShowNSSLMPASHN"];
        if (modelShowNSSLMPASHN != null && modelShowNSSLMPASHN == false) {
          document.querySelector('[data-model="mpas_nssl_hn"]').style.display =
            "none";
        }

        var modelShowNSSLMPASHT = savedSettings["modelShowNSSLMPASHT"];
        if (modelShowNSSLMPASHT != null && modelShowNSSLMPASHT == false) {
          document.querySelector('[data-model="mpas_nssl_ht"]').style.display =
            "none";
        }

        var modelShowNSSLMPASRT = savedSettings["modelShowNSSLMPASRT"];
        if (modelShowNSSLMPASRT != null && modelShowNSSLMPASRT == false) {
          document.querySelector('[data-model="mpas_nssl_rt"]').style.display =
            "none";
        }

        var modelShowHRDPS = savedSettings["modelShowHRDPS"];
        if (modelShowHRDPS != null && modelShowHRDPS == false) {
          document.querySelector('[data-model="hrdps"]').style.display = "none";
        }

        //MODELS - Ensembles
        var modelShowCMCE = savedSettings["modelShowCMCE"];
        if (modelShowCMCE != null && modelShowCMCE == false) {
          document.querySelector('[data-model="cmceens"]').style.display =
            "none";
        }

        var modelShowEPS = savedSettings["modelShowEPS"];
        if (modelShowEPS != null && modelShowEPS == false) {
          document.querySelector('[data-model="epsens"]').style.display =
            "none";
        }

        var modelShowEPSOpenData = savedSettings["modelShowEPSOpenData"];
        if (modelShowEPSOpenData != null && modelShowEPSOpenData == false) {
          document.querySelector(
            '[data-model="epsens_opendata"]'
          ).style.display = "none";
        }

        var modelShowGEFS = savedSettings["modelShowGEFS"];
        if (modelShowGEFS != null && modelShowGEFS == false) {
          document.querySelector('[data-model="gefsens"]').style.display =
            "none";
        }

        var modelShowICONEPS = savedSettings["modelShowICONEPS"];
        if (modelShowICONEPS != null && modelShowICONEPS == false) {
          document.querySelector('[data-model="iconens"]').style.display =
            "none";
        }

        var modelShowSREF = savedSettings["modelShowSREF"];
        if (modelShowSREF != null && modelShowSREF == false) {
          document.querySelector('[data-model="srefens"]').style.display =
            "none";
        }

        var modelShowNWSBlend = savedSettings["modelShowNWSBlend"];
        if (modelShowNWSBlend != null && modelShowNWSBlend == false) {
          document.querySelector('[data-model="nbm"]').style.display = "none";
        }

        //Highlight 00Z
        var styleHighlight00Z = savedSettings["styleHighlight00Z"];
        if (styleHighlight00Z) {
          var gridBoxList = document.querySelectorAll(
            "div.button_cell[title~='00z']:not(.variable_selected)"
          );
          if (gridBoxList) {
            gridBoxList.forEach((gridObj) => {
              gridObj.style.backgroundColor = "#f64605";
            });
          }
        }
        //FAVORITES
        let favoritesCollection = savedSettings["favorites"];

        var side_menu = document.getElementById("side_menu");
        if (side_menu) {
          var secondChild = side_menu.querySelector(
            ":scope > .variable_selection_label"
          );
          if (secondChild) {
            let fav_group = document.createElement("div");
            fav_group.setAttribute("id", "ui-id-00");

            console.log("favcol", favoritesCollection);
            favoritesCollection.forEach((group) => {
              if (group.header) {
                //header is not ""

                console.log("header", group.header);
                //create group header
                let subgrouplabel = document.createElement("div");
                subgrouplabel.className = "favorite_subgroup_label";
                subgrouplabel.textContent = group.header;

                let subgroup = document.createElement("div");
                subgroup.className = "parameter_subgroup";

                if (group.favorite1) {
                  console.log("fav1", group.favorite1);
                  let row1_1 = document.createElement("div");
                  row1_1.className = "row";
                  row1_1.style = "position: relative;";
                  let fav1_1 = document.createElement("div");
                  fav1_1.className = "cell_link";
                  fav1_1.style = "position: relative";
                  let fav_link1_1 = document.createElement("a");
                  fav_link1_1.className =
                    "cell_link parameter_link favorite_link";
                  fav_link1_1.setAttribute(
                    "href",
                    cleanURL(group.favorite1, "rh")
                  );
                  fav_link1_1.textContent = group.name1;
                  fav_link1_1.setAttribute("target", "_self");
                  fav1_1.append(fav_link1_1);
                  row1_1.append(fav1_1);

                  subgroup.append(row1_1);
                }

                if (group.favorite2) {
                  console.log("fav2", group.favorite2);
                  let row1_2 = document.createElement("div");
                  row1_2.className = "row";
                  row1_2.style = "position: relative;";
                  let fav1_2 = document.createElement("div");
                  fav1_2.className = "cell_link";
                  fav1_2.style = "position: relative";
                  let fav_link1_2 = document.createElement("a");
                  fav_link1_2.className =
                    "cell_link parameter_link favorite_link";
                  fav_link1_2.setAttribute(
                    "href",
                    cleanURL(group.favorite2, "rh")
                  );
                  fav_link1_2.textContent = group.name2;
                  fav_link1_2.setAttribute("target", "_self");
                  fav1_2.append(fav_link1_2);
                  row1_2.append(fav1_2);

                  subgroup.append(row1_2);
                }
                if (group.favorite3) {
                  console.log("fav3", group.favorite3);
                  let row1_3 = document.createElement("div");
                  row1_3.className = "row";
                  row1_3.style = "position: relative;";
                  let fav1_3 = document.createElement("div");
                  fav1_3.className = "cell_link";
                  fav1_3.style = "position: relative";
                  let fav_link1_3 = document.createElement("a");
                  fav_link1_3.className =
                    "cell_link parameter_link favorite_link";
                  fav_link1_3.setAttribute(
                    "href",
                    cleanURL(group.favorite3, "rh")
                  );
                  fav_link1_3.textContent = group.name3;
                  fav_link1_3.setAttribute("target", "_self");
                  fav1_3.append(fav_link1_3);
                  row1_3.append(fav1_3);

                  subgroup.append(row1_3);
                }
                if (group.favorite4) {
                  console.log("fav4", group.favorite4);
                  let row1_4 = document.createElement("div");
                  row1_4.className = "row";
                  row1_4.style = "position: relative;";
                  let fav1_4 = document.createElement("div");
                  fav1_4.className = "cell_link";
                  fav1_4.style = "position: relative";
                  let fav_link1_4 = document.createElement("a");
                  fav_link1_4.className =
                    "cell_link parameter_link favorite_link";
                  fav_link1_4.setAttribute(
                    "href",
                    cleanURL(group.favorite4, "rh")
                  );
                  fav_link1_4.textContent = group.name4;
                  fav_link1_4.setAttribute("target", "_self");
                  fav1_4.append(fav_link1_4);
                  row1_4.append(fav1_4);

                  subgroup.append(row1_4);
                }

                //check if at least
                console.log(
                  "subgroup.children.length > 0",
                  subgroup.children.length
                );
                if (subgroup.children.length > 0) {
                  fav_group.append(subgrouplabel);
                  fav_group.append(subgroup);
                }
              }
            });

            //check for any subgroups
            console.log(
              "fav_group.children.length > 0",
              fav_group.children.length
            );
            if (fav_group.children.length > 0) {
              var fav_label = document.createElement("div");
              fav_label.className = "variable_selection_label";
              fav_label.textContent = "Favorites";

              side_menu.insertBefore(fav_group, secondChild);
              side_menu.insertBefore(fav_label, fav_group);
            }
          }
        }
      }
    }
  });
} catch (error) {
  alert("Oh Hail no! Sorry I ran into an issue: " + error);
}

function cleanURL(url, param) {
  // Create a URL object from the given string
  let urlObj = new URL(url);

  // Use the URLSearchParams object to get the query parameters
  let params = urlObj.searchParams;

  // Delete the specified query parameter (e.g., "rh")
  params.delete(param);

  // Return the updated URL without the specified query parameter
  return urlObj
    .toString()
    .toLowerCase()
    .replace("https://www.pivotalweather.com", "");
}
