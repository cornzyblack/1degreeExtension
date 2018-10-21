const oneDegreeUrl = "https://www.1degree.org/";

let contextMenuItemOpp = {
	"id": "opportunity",
	"title": "Open opportunity on One Degree",
	"contexts": ["selection"]
};

let contextMenuItemOrg = {
	"id": "organization",
	"title": "Open organization on One Degree",
	"contexts": ["selection"]
};

function orgOpen(orgId){
	if(/^\d+$/.test(orgId)){
		let orgUrl= oneDegreeUrl + "org/" + orgId;
		window.open(orgUrl, '_blank');
	}
}

function oppOpen(oppId){
	if(/^\d+$/.test(oppId)){
		let oppUrl= oneDegreeUrl + "opp/" + oppId;
		window.open(oppUrl, '_blank');
	}
}

const action_to_take = {"opportunity": oppId, "organization": orgId};

function onClickHandler(clickedItem){
	action_to_take[clickedItem.menuItemId](clickedItem.selectionText);
}

chrome.contextMenus.create(contextMenuItemOpp);
chrome.contextMenus.create(contextMenuItemOrg);

chrome.contextMenus.onClicked.addListener(onClickHandler);
