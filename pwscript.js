
var savedSettings = null;

try
{
    //chrome.storage.sync.clear();

    chrome.storage.sync.get().then(
        (items) => {
            var jsonSettingsVal = items['PWSimplifySettings'];
            if(jsonSettingsVal){
                
                savedSettings = JSON.parse(jsonSettingsVal);

                //if settings are available
                if(savedSettings) {
                    
                    //NAV
                    var showBanner = savedSettings['showBanner']; //#banner_container {display: none !important; }
                    if(showBanner != null && showBanner == false) { document.getElementById('banner_container').style.display = 'none'; }

                    //alert(jsonSettingsVal);

                    var hoverTimeLinks = savedSettings['hoverTimeLinks']; //#hoverlinks {display: none !important; }
                    if(hoverTimeLinks != null && hoverTimeLinks == false) 
                    { 
                        var hoverlnks = document.getElementById('hoverlinks');
                        if(hoverlnks)
                        {
                            hoverlnks.style.display = 'none'; 
                        }
                    }

                    var fixSliderHover = savedSettings['fixSliderHover'];
                    if(fixSliderHover) 
                    {
                        const sliderHandleObj = document.getElementsByClassName('ui-slider-handle');
                        if(sliderHandleObj)
                        {
                            var sliderBtn = sliderHandleObj[0];
                            if(sliderBtn)
                            {
                                sliderBtn.addEventListener("mouseout", (event) => {
                                    sliderHandleObj[0].blur();
                                });
                            }
                        }

                    }


                    //MODELS - Globals
                    var modelShowCFS = savedSettings['modelShowCFS'];
                    if(modelShowCFS != null && modelShowCFS == false) { document.querySelector('[data-model="cfs"]').style.display = 'none'; }

                    var modelShowECMWF = savedSettings['modelShowECMWF'];
                    if(modelShowECMWF != null && modelShowECMWF == false) { document.querySelector('[data-model="ecmwf_full"]').style.display = 'none'; }

                    var modelShowECMWFAIFS = savedSettings['modelShowECMWFAIFS'];
                    if(modelShowECMWFAIFS != null && modelShowECMWFAIFS == false) { document.querySelector('[data-model="ecmwf_aifs"]').style.display = 'none'; }

                    var modelShowGFS = savedSettings['modelShowGFS'];
                    if(modelShowGFS != null && modelShowGFS == false) { document.querySelector('[data-model="gfs"]').style.display = 'none'; }

                    var modelShowGraphCastGFS = savedSettings['modelShowGraphCastGFS'];
                    if(modelShowGraphCastGFS != null && modelShowGraphCastGFS == false) { document.querySelector('[data-model="graphcast_gfs"]').style.display = 'none'; }

                    var modelShowGDPS = savedSettings['modelShowGDPS'];
                    if(modelShowGDPS != null && modelShowGDPS == false) { document.querySelector('[data-model="gdps"]').style.display = 'none'; }

                    var modelShowICON = savedSettings['modelShowICON'];
                    if(modelShowICON != null && modelShowICON == false) { document.querySelector('[data-model="icon"]').style.display = 'none'; }

                    var modelShowUkmet = savedSettings['modelShowUkmet'];
                    if(modelShowUkmet != null && modelShowUkmet == false) { document.querySelector('[data-model="ukmet"]').style.display = 'none'; }

                    //MODELS - Regional
                    var modelShowNAM = savedSettings['modelShowNAM'];
                    if(modelShowNAM != null && modelShowNAM == false) { document.querySelector('[data-model="nam"]').style.display = 'none'; }

                    var modelShowRAP = savedSettings['modelShowRAP'];
                    if(modelShowRAP != null && modelShowRAP == false) { document.querySelector('[data-model="rap"]').style.display = 'none'; }

                    var modelShowRDPS = savedSettings['modelShowRDPS'];
                    if(modelShowRDPS != null && modelShowRDPS == false) { document.querySelector('[data-model="rdps"]').style.display = 'none'; }

                    //MODELS - CAMs
                    var modelShowHRRR = savedSettings['modelShowHRRR'];
                    if(modelShowHRRR != null && modelShowHRRR == false) { document.querySelector('[data-model="hrrr"]').style.display = 'none'; }

                    var modelShowNAM3km = savedSettings['modelShowNAM3km'];
                    if(modelShowNAM3km != null && modelShowNAM3km == false) { document.querySelector('[data-model="nam4km"]').style.display = 'none'; }

                    var modelShowHRWWRFARW = savedSettings['modelShowHRWWRFARW'];
                    if(modelShowHRWWRFARW != null && modelShowHRWWRFARW == false) { document.querySelector('[data-model="hrwarw"]').style.display = 'none'; }

                    var modelShowHRWWRFNSSL = savedSettings['modelShowHRWWRFNSSL'];
                    if(modelShowHRWWRFNSSL != null && modelShowHRWWRFNSSL == false) { document.querySelector('[data-model="hrwnssl"]').style.display = 'none'; }

                    var modelShowFV3 = savedSettings['modelShowFV3'];
                    if(modelShowFV3 != null && modelShowFV3 == false) { document.querySelector('[data-model="hrwfv3"]').style.display = 'none'; }

                    var modelShowRRFSA = savedSettings['modelShowRRFSA'];
                    if(modelShowRRFSA != null && modelShowRRFSA == false) { document.querySelector('[data-model="rrfs_a"]').style.display = 'none'; }

                    var modelShowNSSLMPASHN = savedSettings['modelShowNSSLMPASHN'];
                    if(modelShowNSSLMPASHN != null && modelShowNSSLMPASHN == false) { document.querySelector('[data-model="mpas_nssl_hn"]').style.display = 'none'; }

                    var modelShowNSSLMPASHT = savedSettings['modelShowNSSLMPASHT'];
                    if(modelShowNSSLMPASHT != null && modelShowNSSLMPASHT == false) { document.querySelector('[data-model="mpas_nssl_ht"]').style.display = 'none'; }

                    var modelShowNSSLMPASRT = savedSettings['modelShowNSSLMPASRT'];
                    if(modelShowNSSLMPASRT != null && modelShowNSSLMPASRT == false) { document.querySelector('[data-model="mpas_nssl_rt"]').style.display = 'none'; }

                    var modelShowHRDPS = savedSettings['modelShowHRDPS'];
                    if(modelShowHRDPS != null && modelShowHRDPS == false) { document.querySelector('[data-model="hrdps"]').style.display = 'none'; }

                    //MODELS - Ensembles
                    var modelShowCMCE = savedSettings['modelShowCMCE'];
                    if(modelShowCMCE != null && modelShowCMCE == false) { document.querySelector('[data-model="cmceens"]').style.display = 'none'; }

                    var modelShowEPS = savedSettings['modelShowEPS'];
                    if(modelShowEPS != null && modelShowEPS == false) { document.querySelector('[data-model="epsens"]').style.display = 'none'; }

                    var modelShowEPSOpenData = savedSettings['modelShowEPSOpenData'];
                    if(modelShowEPSOpenData != null && modelShowEPSOpenData == false) { document.querySelector('[data-model="epsens_opendata"]').style.display = 'none'; }

                    var modelShowGEFS = savedSettings['modelShowGEFS'];
                    if(modelShowGEFS != null && modelShowGEFS == false) { document.querySelector('[data-model="gefsens"]').style.display = 'none'; }

                    var modelShowICONEPS = savedSettings['modelShowICONEPS'];
                    if(modelShowICONEPS != null && modelShowICONEPS == false) { document.querySelector('[data-model="iconens"]').style.display = 'none'; }

                    var modelShowSREF = savedSettings['modelShowSREF'];
                    if(modelShowSREF != null && modelShowSREF == false) { document.querySelector('[data-model="srefens"]').style.display = 'none'; }

                    var modelShowNWSBlend = savedSettings['modelShowNWSBlend'];
                    if(modelShowNWSBlend != null && modelShowNWSBlend == false) { document.querySelector('[data-model="nbm"]').style.display = 'none'; }

                    //COMPARE
                    /*var compSel = document.getElementById('model_comparison_selector');
                    if(compSel)
                    {
                        const compareDiv = document.createElement("div");
                        const compareCheckboxLabel = document.createElement("label");
                        const newLabelContent = document.createTextNode("Rotate Compare");
                        const autoCompareChkBx = document.createElement("input");
                        autoCompareChkBx.type = "checkbox";

                        autoCompareChkBx.addEventListener('change', (event) => {
                            if (event.currentTarget.checked) {
                              
                            } else {
                              
                            }
                          })

                        compareCheckboxLabel.appendChild(autoCompareChkBx);
                        compareCheckboxLabel.appendChild(newLabelContent);
                        compareDiv.appendChild(compareCheckboxLabel);

                        compSel.parentNode.insertBefore(compareDiv, compSel.nextSibling);
                    }*/

                    //Highlight 00Z
                    var styleHighlight00Z = savedSettings['styleHighlight00Z'];
                    if(styleHighlight00Z)
                    {
                        var gridBoxList = document.querySelectorAll("div.button_cell[title~='00z']:not(.variable_selected)");
                        if(gridBoxList)
                        {
                            gridBoxList.forEach((gridObj) => {  
                                gridObj.style.backgroundColor = "#f64605";
                            });
                        }
                    }
                }
            }
        }
      );

    }
catch(error) {alert('Oh Hail no! Sorry I ran into an issue: ' + error);}
