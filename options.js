// Saves options to chrome.storage
const saveOptions = () => {
    const hoverlinksValue = document.getElementById('hoverlinks').checked;
  
    chrome.storage.sync.set(
      { 'hoverlinksSetting': hoverlinksValue },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved. You can close this tab' + hoverlinksValue;
        setTimeout(() => {
          status.textContent = '';
        }, 2000);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {

   chrome.storage.sync.get().then(
      (items) => {
        document.getElementById('hoverlinks').checked = items['hoverlinks'];
        alert('restore'+items['hoverlinks']);
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);