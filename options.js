function validateInputs(event) {
  event.preventDefault(); // Prevent form submission.  i.e. page won't refresh

  var isValid = true;

  const urlInputs = document.querySelectorAll('input[type="url"]');
  const urlErrors = document.querySelectorAll(".urlError");

  urlInputs.forEach((input, index) => {
    if (!input.checkValidity()) {
      //console.log(`Input:${input.id} is NOT valid`);
      urlErrors[index].style.display = "inline"; // Show red asterisk if invalid
      isValid = false; // Form is not valid
    } else {
      urlErrors[index].style.display = "none";
      //console.log(`Input:${input.id} IS valid`);
    }
  });

  if (!isValid) {
    const status = document.getElementById("status");
    status.style = "color: red;";
    status.textContent =
      "Settings not saved. One or more errors above. Ensure Favorites are proper URLs or empty.";
  }

  return isValid;
}

// Saves options to chrome.storage
function saveOptions(event) {
  //https://www.pivotalweather.com/model.php?rh=2024092012&fh=loop&dpdt=&mc=&r=us_nc&p=prateptype_cat_ecmwf-imp&m=ecmwf_full
  //console.log("Saving options...");
  try {
    if (validateInputs(event)) {
      //console.log("Everything is valid.  Save!");
      //NAV
      const showBanner = document.getElementById("showBanner").checked;
      const hoverTimeLinks = document.getElementById("hoverTimeLinks").checked;
      const fixSliderHover = document.getElementById("fixSliderHover").checked;

      //MODELS - Globals
      const modelShowCFS = document.getElementById("modelShowCFS").checked;
      const modelShowECMWF = document.getElementById("modelShowECMWF").checked;
      const modelShowECMWFAIFS =
        document.getElementById("modelShowECMWFAIFS").checked;
      const modelShowGFS = document.getElementById("modelShowGFS").checked;
      const modelShowGraphCastGFS = document.getElementById(
        "modelShowGraphCastGFS"
      ).checked;
      const modelShowGDPS = document.getElementById("modelShowGDPS").checked;
      const modelShowICON = document.getElementById("modelShowICON").checked;
      const modelShowUkmet = document.getElementById("modelShowUkmet").checked;

      //MODELS - Regional
      const modelShowNAM = document.getElementById("modelShowNAM").checked;
      const modelShowRAP = document.getElementById("modelShowRAP").checked;
      const modelShowRDPS = document.getElementById("modelShowRDPS").checked;

      //MODELS - CAMs
      const modelShowHRRR = document.getElementById("modelShowHRRR").checked;
      const modelShowNAM3km =
        document.getElementById("modelShowNAM3km").checked;
      const modelShowHRWWRFARW =
        document.getElementById("modelShowHRWWRFARW").checked;
      const modelShowHRWWRFNSSL = document.getElementById(
        "modelShowHRWWRFNSSL"
      ).checked;
      const modelShowFV3 = document.getElementById("modelShowFV3").checked;
      const modelShowRRFSA = document.getElementById("modelShowRRFSA").checked;
      const modelShowNSSLMPASHN = document.getElementById(
        "modelShowNSSLMPASHN"
      ).checked;
      const modelShowNSSLMPASHT = document.getElementById(
        "modelShowNSSLMPASHT"
      ).checked;
      const modelShowNSSLMPASRT = document.getElementById(
        "modelShowNSSLMPASRT"
      ).checked;
      const modelShowHRDPS = document.getElementById("modelShowHRDPS").checked;

      //MODELS - Ensembles
      const modelShowCMCE = document.getElementById("modelShowCMCE").checked;
      const modelShowEPS = document.getElementById("modelShowEPS").checked;
      const modelShowEPSOpenData = document.getElementById(
        "modelShowEPSOpenData"
      ).checked;
      const modelShowGEFS = document.getElementById("modelShowGEFS").checked;
      const modelShowICONEPS =
        document.getElementById("modelShowICONEPS").checked;
      const modelShowSREF = document.getElementById("modelShowSREF").checked;
      const modelShowNWSBlend =
        document.getElementById("modelShowNWSBlend").checked;

      //STYLE
      const styleHighlight00Z =
        document.getElementById("styleHighlight00Z").checked;

      //FAVORITES
      const favoritesCollection = [];
      const group1header = document.getElementById("txtFavGroup1Header").value;
      if (group1header) {
        favoritesCollection.push({
          header: group1header,
          name1: document.getElementById("txtName1-1").value,
          favorite1: document.getElementById("txtFav1-1").value,
          name2: document.getElementById("txtName1-2").value,
          favorite2: document.getElementById("txtFav1-2").value,
          name3: document.getElementById("txtName1-3").value,
          favorite3: document.getElementById("txtFav1-3").value,
          name4: document.getElementById("txtName1-4").value,
          favorite4: document.getElementById("txtFav1-4").value,
        });
      } else {
        //push empty
        favoritesCollection.push({
          header: "",
          name1: "",
          favorite1: "",
          name2: "",
          favorite2: "",
          name3: "",
          favorite3: "",
          name4: "",
          favorite4: "",
        });
      }
      const group2header = document.getElementById("txtFavGroup2Header").value;
      if (group2header) {
        favoritesCollection.push({
          header: group2header,
          name1: document.getElementById("txtName2-1").value,
          favorite1: document.getElementById("txtFav2-1").value,
          name2: document.getElementById("txtName2-2").value,
          favorite2: document.getElementById("txtFav2-2").value,
          name3: document.getElementById("txtName2-3").value,
          favorite3: document.getElementById("txtFav2-3").value,
          name4: document.getElementById("txtName2-4").value,
          favorite4: document.getElementById("txtFav2-4").value,
        });
      } else {
        //push empty
        favoritesCollection.push({
          header: "",
          name1: "",
          favorite1: "",
          name2: "",
          favorite2: "",
          name3: "",
          favorite3: "",
          name4: "",
          favorite4: "",
        });
      }
      const group3header = document.getElementById("txtFavGroup3Header").value;
      if (group3header) {
        favoritesCollection.push({
          header: group3header,
          name1: document.getElementById("txtName3-1").value,
          favorite1: document.getElementById("txtFav3-1").value,
          name2: document.getElementById("txtName3-2").value,
          favorite2: document.getElementById("txtFav3-2").value,
          name3: document.getElementById("txtName3-3").value,
          favorite3: document.getElementById("txtFav3-3").value,
          name4: document.getElementById("txtName3-4").value,
          favorite4: document.getElementById("txtFav3-4").value,
        });
      } else {
        //push empty
        favoritesCollection.push({
          header: "",
          name1: "",
          favorite1: "",
          name2: "",
          favorite2: "",
          name3: "",
          favorite3: "",
          name4: "",
          favorite4: "",
        });
      }

      var key = "PWSimplifySettings",
        tempPrefs = JSON.stringify({
          showBanner: showBanner,
          hoverTimeLinks: hoverTimeLinks,
          fixSliderHover: fixSliderHover,
          modelShowCFS: modelShowCFS,
          modelShowECMWF: modelShowECMWF,
          modelShowECMWFAIFS: modelShowECMWFAIFS,
          modelShowGFS: modelShowGFS,
          modelShowGraphCastGFS: modelShowGraphCastGFS,
          modelShowGDPS: modelShowGDPS,
          modelShowICON: modelShowICON,
          modelShowUkmet: modelShowUkmet,
          modelShowNAM: modelShowNAM,
          modelShowRAP: modelShowRAP,
          modelShowRDPS: modelShowRDPS,
          modelShowHRRR: modelShowHRRR,
          modelShowNAM3km: modelShowNAM3km,
          modelShowHRWWRFARW: modelShowHRWWRFARW,
          modelShowHRWWRFNSSL: modelShowHRWWRFNSSL,
          modelShowFV3: modelShowFV3,
          modelShowRRFSA: modelShowRRFSA,
          modelShowNSSLMPASHN: modelShowNSSLMPASHN,
          modelShowNSSLMPASHT: modelShowNSSLMPASHT,
          modelShowNSSLMPASRT: modelShowNSSLMPASRT,
          modelShowHRDPS: modelShowHRDPS,
          modelShowCMCE: modelShowCMCE,
          modelShowEPS: modelShowEPS,
          modelShowEPSOpenData: modelShowEPSOpenData,
          modelShowGEFS: modelShowGEFS,
          modelShowICONEPS: modelShowICONEPS,
          modelShowSREF: modelShowSREF,
          modelShowNWSBlend: modelShowNWSBlend,
          styleHighlight00Z: styleHighlight00Z,
          favorites: favoritesCollection,
        });

      //console.log(tempPrefs);

      var jsonSettings = {};
      jsonSettings[key] = tempPrefs;

      //alert(tempPrefs);
      chrome.storage.sync.set(jsonSettings, function () {
        // Update status to let user know options were saved.
        const status = document.getElementById("status");
        status.style = "color: green;";
        status.textContent = "Options saved! You can close this tab.";
        setTimeout(() => {
          status.textContent = "";
        }, 3000);
      });
    }
  } catch (error) {}
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  //console.log("Restoring from saved settings.");
  try {
    chrome.storage.sync.get().then((items) => {
      var jsonSettingsVal = items["PWSimplifySettings"];
      if (jsonSettingsVal) {
        //alert(jsonSettingsVal);

        return populateSettings(jsonSettingsVal); //pass the raw JSON
      } else {
        return saveDefaultSettings();
      }
    });
  } catch (error) {}
};

function saveDefaultSettings() {
  return new Promise(function (resolve, reject) {
    try {
      const favoritesCollection = [];
      favoritesCollection.push({
        header: "",
        name1: "",
        favorite1: "",
        name2: "",
        favorite2: "",
        name3: "",
        favorite3: "",
        name4: "",
        favorite4: "",
      });
      favoritesCollection.push({
        header: "",
        name1: "",
        favorite1: "",
        name2: "",
        favorite2: "",
        name3: "",
        favorite3: "",
        name4: "",
        favorite4: "",
      });
      favoritesCollection.push({
        header: "",
        name1: "",
        favorite1: "",
        name2: "",
        favorite2: "",
        name3: "",
        favorite3: "",
        name4: "",
        favorite4: "",
      });

      //DEFALULTS
      var key = "PWSimplifySettings",
        tempPrefs = JSON.stringify({
          showBanner: true,
          hoverTimeLinks: true,
          fixSliderHover: false,
          modelShowCFS: true,
          modelShowECMWF: true,
          modelShowECMWFAIFS: true,
          modelShowGFS: true,
          modelShowGraphCastGFS: true,
          modelShowGDPS: true,
          modelShowICON: true,
          modelShowUkmet: true,
          modelShowNAM: true,
          modelShowRAP: true,
          modelShowRDPS: true,
          modelShowHRRR: true,
          modelShowNAM3km: true,
          modelShowHRWWRFARW: true,
          modelShowHRWWRFNSSL: true,
          modelShowFV3: true,
          modelShowRRFSA: true,
          modelShowNSSLMPASHN: true,
          modelShowNSSLMPASHT: true,
          modelShowNSSLMPASRT: true,
          modelShowHRDPS: true,
          modelShowCMCE: true,
          modelShowEPS: true,
          modelShowEPSOpenData: true,
          modelShowGEFS: true,
          modelShowICONEPS: true,
          modelShowSREF: true,
          modelShowNWSBlend: true,
          styleHighlight00Z: false,
          favorites: favoritesCollection,
        });

      //console.log(tempPrefs);

      var jsonSettings = {};
      jsonSettings[key] = tempPrefs;

      //alert(tempPrefs);
      chrome.storage.sync.set(jsonSettings, function () {
        setTimeout(() => {
          //do something
          return populateSettings(tempPrefs);
        }, 3000);
      });
    } catch (error) {
      reject(false);
    }
  });
}

function populateSettings(theSettings) {
  return new Promise(function (resolve, reject) {
    try {
      //passed in the raw JSON
      if (theSettings) {
        var retrSettings = JSON.parse(theSettings);

        //console.log(retrSettings);

        //NAV
        var showBanner = retrSettings["showBanner"];
        document.getElementById("showBanner").checked = showBanner;

        var hoverTimeLinks = retrSettings["hoverTimeLinks"];
        document.getElementById("hoverTimeLinks").checked = hoverTimeLinks;

        var fixSliderHover = retrSettings["fixSliderHover"];
        document.getElementById("fixSliderHover").checked = fixSliderHover;

        //MODELS - Globals
        var modelShowCFS = retrSettings["modelShowCFS"];
        document.getElementById("modelShowCFS").checked = modelShowCFS;

        var modelShowECMWF = retrSettings["modelShowECMWF"];
        document.getElementById("modelShowECMWF").checked = modelShowECMWF;

        var modelShowECMWFAIFS = retrSettings["modelShowECMWFAIFS"];
        document.getElementById("modelShowECMWFAIFS").checked =
          modelShowECMWFAIFS;

        var modelShowGFS = retrSettings["modelShowGFS"];
        document.getElementById("modelShowGFS").checked = modelShowGFS;

        var modelShowGraphCastGFS = retrSettings["modelShowGraphCastGFS"];
        document.getElementById("modelShowGraphCastGFS").checked =
          modelShowGraphCastGFS;

        var modelShowGDPS = retrSettings["modelShowGDPS"];
        document.getElementById("modelShowGDPS").checked = modelShowGDPS;

        var modelShowICON = retrSettings["modelShowICON"];
        document.getElementById("modelShowICON").checked = modelShowICON;

        var modelShowUkmet = retrSettings["modelShowUkmet"];
        document.getElementById("modelShowUkmet").checked = modelShowUkmet;

        //MODELS - Region
        var modelShowNAM = retrSettings["modelShowNAM"];
        document.getElementById("modelShowNAM").checked = modelShowNAM;

        var modelShowRAP = retrSettings["modelShowRAP"];
        document.getElementById("modelShowRAP").checked = modelShowRAP;

        var modelShowRDPS = retrSettings["modelShowRDPS"];
        document.getElementById("modelShowRDPS").checked = modelShowRDPS;

        //MODELS - CAMs
        var modelShowHRRR = retrSettings["modelShowHRRR"];
        document.getElementById("modelShowHRRR").checked = modelShowHRRR;

        var modelShowNAM3km = retrSettings["modelShowNAM3km"];
        document.getElementById("modelShowNAM3km").checked = modelShowNAM3km;

        var modelShowHRWWRFARW = retrSettings["modelShowHRWWRFARW"];
        document.getElementById("modelShowHRWWRFARW").checked =
          modelShowHRWWRFARW;

        var modelShowHRWWRFNSSL = retrSettings["modelShowHRWWRFNSSL"];
        document.getElementById("modelShowHRWWRFNSSL").checked =
          modelShowHRWWRFNSSL;

        var modelShowFV3 = retrSettings["modelShowFV3"];
        document.getElementById("modelShowFV3").checked = modelShowFV3;

        var modelShowRRFSA = retrSettings["modelShowRRFSA"];
        document.getElementById("modelShowRRFSA").checked = modelShowRRFSA;

        var modelShowNSSLMPASHN = retrSettings["modelShowNSSLMPASHN"];
        document.getElementById("modelShowNSSLMPASHN").checked =
          modelShowNSSLMPASHN;

        var modelShowNSSLMPASHT = retrSettings["modelShowNSSLMPASHT"];
        document.getElementById("modelShowNSSLMPASHT").checked =
          modelShowNSSLMPASHT;

        var modelShowNSSLMPASRT = retrSettings["modelShowNSSLMPASRT"];
        document.getElementById("modelShowNSSLMPASRT").checked =
          modelShowNSSLMPASRT;

        var modelShowHRDPS = retrSettings["modelShowHRDPS"];
        document.getElementById("modelShowHRDPS").checked = modelShowHRDPS;

        //MODELS - Ensembles
        var modelShowCMCE = retrSettings["modelShowCMCE"];
        document.getElementById("modelShowCMCE").checked = modelShowCMCE;

        var modelShowEPS = retrSettings["modelShowEPS"];
        document.getElementById("modelShowEPS").checked = modelShowEPS;

        var modelShowEPSOpenData = retrSettings["modelShowEPSOpenData"];
        document.getElementById("modelShowEPSOpenData").checked =
          modelShowEPSOpenData;

        var modelShowGEFS = retrSettings["modelShowGEFS"];
        document.getElementById("modelShowGEFS").checked = modelShowGEFS;

        var modelShowICONEPS = retrSettings["modelShowICONEPS"];
        document.getElementById("modelShowICONEPS").checked = modelShowICONEPS;

        var modelShowSREF = retrSettings["modelShowSREF"];
        document.getElementById("modelShowSREF").checked = modelShowSREF;

        var modelShowNWSBlend = retrSettings["modelShowNWSBlend"];
        document.getElementById("modelShowNWSBlend").checked =
          modelShowNWSBlend;

        //STYLE
        var styleHighlight00Z = retrSettings["styleHighlight00Z"];
        document.getElementById("styleHighlight00Z").checked =
          styleHighlight00Z;

        //FAVORITES
        const favoritesCollection = retrSettings["favorites"];
        // Group 1
        //console.log(favoritesCollection);

        document.getElementById("txtFavGroup1Header").value =
          favoritesCollection[0].header;
        document.getElementById("txtName1-1").value =
          favoritesCollection[0].name1;
        document.getElementById("txtFav1-1").value =
          favoritesCollection[0].favorite1;
        document.getElementById("txtName1-2").value =
          favoritesCollection[0].name2;
        document.getElementById("txtFav1-2").value =
          favoritesCollection[0].favorite2;
        document.getElementById("txtName1-3").value =
          favoritesCollection[0].name3;
        document.getElementById("txtFav1-3").value =
          favoritesCollection[0].favorite3;
        document.getElementById("txtName1-4").value =
          favoritesCollection[0].name4;
        document.getElementById("txtFav1-4").value =
          favoritesCollection[0].favorite4;

        // Group 2
        document.getElementById("txtFavGroup2Header").value =
          favoritesCollection[1].header;
        document.getElementById("txtName2-1").value =
          favoritesCollection[1].name1;
        document.getElementById("txtFav2-1").value =
          favoritesCollection[1].favorite1;
        document.getElementById("txtName2-2").value =
          favoritesCollection[1].name2;
        document.getElementById("txtFav2-2").value =
          favoritesCollection[1].favorite2;
        document.getElementById("txtName2-3").value =
          favoritesCollection[1].name3;
        document.getElementById("txtFav2-3").value =
          favoritesCollection[1].favorite3;
        document.getElementById("txtName2-4").value =
          favoritesCollection[1].name4;
        document.getElementById("txtFav2-4").value =
          favoritesCollection[1].favorite4;

        // Group 3
        document.getElementById("txtFavGroup3Header").value =
          favoritesCollection[2].header;
        document.getElementById("txtName3-1").value =
          favoritesCollection[2].name1;
        document.getElementById("txtFav3-1").value =
          favoritesCollection[2].favorite1;
        document.getElementById("txtName3-2").value =
          favoritesCollection[2].name2;
        document.getElementById("txtFav3-2").value =
          favoritesCollection[2].favorite2;
        document.getElementById("txtName3-3").value =
          favoritesCollection[2].name3;
        document.getElementById("txtFav3-3").value =
          favoritesCollection[2].favorite3;
        document.getElementById("txtName3-4").value =
          favoritesCollection[2].name4;
        document.getElementById("txtFav3-4").value =
          favoritesCollection[2].favorite4;
      }

      document.getElementById("body").className = "loaded";
      resolve(theSettings);
    } catch (error) {
      reject(error);
    }
  });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("settingsForm").addEventListener("submit", saveOptions);
