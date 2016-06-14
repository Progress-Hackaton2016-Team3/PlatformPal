var observableArray = require("data/observable-array");
var status_view_model_1 = require("../status/status-view-model");
var IncidentsViewModel = (function () {
    function IncidentsViewModel() {
        this._items = new observableArray.ObservableArray();
        var data = [{
                "name": "Major outage in Telerik Platform",
                "status": "resolved",
                "created_at": "2016-06-09T11:58:36.442Z",
                "updated_at": "2016-06-09T12:59:33.886Z",
                "monitoring_at": "2016-06-09T12:43:39.189Z",
                "resolved_at": "2016-06-09T12:59:33.851Z",
                "impact": "major",
                "shortlink": "http://stspg.io/2R18",
                "postmortem_ignored": false,
                "postmortem_body": null,
                "postmortem_body_last_updated_at": null,
                "postmortem_published_at": null,
                "postmortem_notified_subscribers": false,
                "postmortem_notified_twitter": false,
                "backfilled": false,
                "scheduled_for": null,
                "scheduled_until": null,
                "scheduled_remind_prior": false,
                "scheduled_reminded_at": null,
                "impact_override": null,
                "scheduled_auto_in_progress": false,
                "scheduled_auto_completed": false,
                "id": "gzrdn0ymmjp1",
                "page_id": "2lh8n3fl4jfr",
                "incident_updates": [
                    {
                        "status": "resolved",
                        "body": "This incident has been resolved.",
                        "created_at": "2016-06-09T12:59:33.851Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-06-09T12:59:33.851Z",
                        "display_at": "2016-06-09T12:59:33.851Z",
                        "affected_components": [
                            {
                                "name": "No components were affected by this update."
                            }
                        ],
                        "id": "7m2lhvd3nzy4",
                        "incident_id": "gzrdn0ymmjp1"
                    },
                    {
                        "status": "monitoring",
                        "body": "A fix has been implemented and we are monitoring the results.",
                        "created_at": "2016-06-09T12:43:39.189Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-06-09T12:43:39.189Z",
                        "display_at": "2016-06-09T12:43:39.189Z",
                        "affected_components": [
                            {
                                "name": "No components were affected by this update."
                            }
                        ],
                        "id": "v4pdghdlzmsk",
                        "incident_id": "gzrdn0ymmjp1"
                    },
                    {
                        "status": "investigating",
                        "body": "Our web servers are down. No data has been lost and the system should be caught up shortly.",
                        "created_at": "2016-06-09T11:58:36.858Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-06-09T11:58:36.858Z",
                        "display_at": "2016-06-09T11:58:36.858Z",
                        "affected_components": [
                            {
                                "name": "No components were affected by this update."
                            }
                        ],
                        "id": "my8t8shrxg6w",
                        "incident_id": "gzrdn0ymmjp1"
                    }
                ]
            },
            {
                "name": "AppBuilder iOS build and AppManager iOS app resigning are temporarily unavailable",
                "status": "resolved",
                "created_at": "2016-04-29T08:22:37.961Z",
                "updated_at": "2016-04-29T11:53:10.836Z",
                "monitoring_at": "2016-04-29T08:26:19.541Z",
                "resolved_at": "2016-04-29T11:53:10.806Z",
                "impact": "none",
                "shortlink": "http://stspg.io/2FZ7",
                "postmortem_ignored": false,
                "postmortem_body": null,
                "postmortem_body_last_updated_at": null,
                "postmortem_published_at": null,
                "postmortem_notified_subscribers": false,
                "postmortem_notified_twitter": false,
                "backfilled": false,
                "scheduled_for": null,
                "scheduled_until": null,
                "scheduled_remind_prior": false,
                "scheduled_reminded_at": null,
                "impact_override": null,
                "scheduled_auto_in_progress": false,
                "scheduled_auto_completed": false,
                "id": "dyydh2t8r73y",
                "page_id": "2lh8n3fl4jfr",
                "incident_updates": [
                    {
                        "status": "resolved",
                        "body": "This incident has been resolved.",
                        "created_at": "2016-04-29T11:53:10.806Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-04-29T11:53:10.806Z",
                        "display_at": "2016-04-29T11:53:10.806Z",
                        "affected_components": null,
                        "id": "frfz1l0r2798",
                        "incident_id": "dyydh2t8r73y"
                    },
                    {
                        "status": "monitoring",
                        "body": "We have resolved the issue and are currently monitoring our systems.",
                        "created_at": "2016-04-29T08:26:19.541Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-04-29T08:26:19.541Z",
                        "display_at": "2016-04-29T08:26:19.541Z",
                        "affected_components": null,
                        "id": "tlbtgmfx79p0",
                        "incident_id": "dyydh2t8r73y"
                    },
                    {
                        "status": "identified",
                        "body": "We have detected connectivity issues between our Mac machines and the rest of our solution.\r\nWe are working on resolving the issue as soon as possible.\r\n\r\nThank you for your understanding.",
                        "created_at": "2016-04-29T08:22:38.282Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-04-29T08:22:38.282Z",
                        "display_at": "2016-04-29T08:22:38.282Z",
                        "affected_components": null,
                        "id": "kgtvv3tgpbsr",
                        "incident_id": "dyydh2t8r73y"
                    }
                ]
            },
            {
                "name": "Telerik AppBuilder: Degraded Performance",
                "status": "resolved",
                "created_at": "2016-04-19T07:47:52.330Z",
                "updated_at": "2016-04-19T07:50:06.397Z",
                "monitoring_at": null,
                "resolved_at": "2016-04-19T07:50:06.367Z",
                "impact": "minor",
                "shortlink": "http://stspg.io/2Bla",
                "postmortem_ignored": false,
                "postmortem_body": null,
                "postmortem_body_last_updated_at": null,
                "postmortem_published_at": null,
                "postmortem_notified_subscribers": false,
                "postmortem_notified_twitter": false,
                "backfilled": false,
                "scheduled_for": null,
                "scheduled_until": null,
                "scheduled_remind_prior": false,
                "scheduled_reminded_at": null,
                "impact_override": null,
                "scheduled_auto_in_progress": false,
                "scheduled_auto_completed": false,
                "id": "2c24gjf77hyd",
                "page_id": "2lh8n3fl4jfr",
                "incident_updates": [
                    {
                        "status": "resolved",
                        "body": "We have resolved the issue and are currently monitoring our systems. If you encounter any additional issues, please, contact the Telerik Support team.",
                        "created_at": "2016-04-19T07:50:06.367Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-04-19T07:50:06.367Z",
                        "display_at": "2016-04-19T07:50:06.367Z",
                        "affected_components": null,
                        "id": "q6fgvbr385nh",
                        "incident_id": "2c24gjf77hyd"
                    },
                    {
                        "status": "identified",
                        "body": "We have identified a performance issue on one of our storage servers. \r\nSome of our users might experience slowdowns and timeouts while using Telerik AppBuilder cloud services.",
                        "created_at": "2016-04-19T07:47:52.725Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-04-19T07:47:52.725Z",
                        "display_at": "2016-04-19T07:47:52.725Z",
                        "affected_components": null,
                        "id": "1hshthdb379b",
                        "incident_id": "2c24gjf77hyd"
                    }
                ]
            },
            {
                "name": "Telerik Platform iOS Services are currently unavailable",
                "status": "resolved",
                "created_at": "2016-03-15T08:08:37.381Z",
                "updated_at": "2016-03-15T14:35:33.012Z",
                "monitoring_at": "2016-03-15T12:09:17.149Z",
                "resolved_at": "2016-03-15T14:35:32.983Z",
                "impact": "minor",
                "shortlink": "http://stspg.io/2439",
                "postmortem_ignored": false,
                "postmortem_body": null,
                "postmortem_body_last_updated_at": null,
                "postmortem_published_at": null,
                "postmortem_notified_subscribers": false,
                "postmortem_notified_twitter": false,
                "backfilled": false,
                "scheduled_for": null,
                "scheduled_until": null,
                "scheduled_remind_prior": false,
                "scheduled_reminded_at": null,
                "impact_override": null,
                "scheduled_auto_in_progress": false,
                "scheduled_auto_completed": false,
                "id": "029cvdcxb1yr",
                "page_id": "2lh8n3fl4jfr",
                "incident_updates": [
                    {
                        "status": "resolved",
                        "body": "This incident has been resolved.",
                        "created_at": "2016-03-15T14:35:32.983Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-03-15T14:35:32.983Z",
                        "display_at": "2016-03-15T14:35:32.983Z",
                        "affected_components": null,
                        "id": "85wj286dq4jq",
                        "incident_id": "029cvdcxb1yr"
                    },
                    {
                        "status": "monitoring",
                        "body": "The issue was resolved. We are currently monitoring our systems.\r\nThe root of the issue was related to a core switch backplane failure, which caused OSPF routing to react unfavorably, ultimately causing most of our mac machines' routing towards the internet to fail intermittently.",
                        "created_at": "2016-03-15T12:09:17.149Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-03-15T12:09:17.149Z",
                        "display_at": "2016-03-15T12:09:17.149Z",
                        "affected_components": null,
                        "id": "wmbrrkvdgtt3",
                        "incident_id": "029cvdcxb1yr"
                    },
                    {
                        "status": "identified",
                        "body": "We have confirmed that the outage is caused by network related issues in our mac hosting provider.",
                        "created_at": "2016-03-15T10:13:18.290Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-03-15T10:13:18.290Z",
                        "display_at": "2016-03-15T10:13:18.290Z",
                        "affected_components": null,
                        "id": "g3qmr1w41yr4",
                        "incident_id": "029cvdcxb1yr"
                    },
                    {
                        "status": "investigating",
                        "body": "AppBuilder iOS cloud build and AppManager iOS codesigning features are currently unavailable.",
                        "created_at": "2016-03-15T08:08:37.651Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-03-15T08:08:37.651Z",
                        "display_at": "2016-03-15T08:08:37.651Z",
                        "affected_components": null,
                        "id": "wjcgjwmd841m",
                        "incident_id": "029cvdcxb1yr"
                    }
                ]
            },
            {
                "name": "Cloud Code Partial Outage",
                "status": "resolved",
                "created_at": "2016-03-14T15:51:01.042Z",
                "updated_at": "2016-03-14T18:17:58.410Z",
                "monitoring_at": null,
                "resolved_at": "2016-03-14T18:17:58.381Z",
                "impact": "minor",
                "shortlink": "http://stspg.io/23ty",
                "postmortem_ignored": false,
                "postmortem_body": null,
                "postmortem_body_last_updated_at": null,
                "postmortem_published_at": null,
                "postmortem_notified_subscribers": false,
                "postmortem_notified_twitter": false,
                "backfilled": false,
                "scheduled_for": null,
                "scheduled_until": null,
                "scheduled_remind_prior": false,
                "scheduled_reminded_at": null,
                "impact_override": null,
                "scheduled_auto_in_progress": false,
                "scheduled_auto_completed": false,
                "id": "29ynzc1r422z",
                "page_id": "2lh8n3fl4jfr",
                "incident_updates": [
                    {
                        "status": "resolved",
                        "body": "This incident has been resolved.",
                        "created_at": "2016-03-14T18:17:58.381Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-03-14T18:17:58.381Z",
                        "display_at": "2016-03-14T18:17:58.381Z",
                        "affected_components": null,
                        "id": "ljsbnl5kldqr",
                        "incident_id": "29ynzc1r422z"
                    },
                    {
                        "status": "investigating",
                        "body": "We are experiencing extremely heavy load on our cloud code servers. Investigation is in process.",
                        "created_at": "2016-03-14T15:51:01.306Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-03-14T15:51:01.306Z",
                        "display_at": "2016-03-14T15:51:01.306Z",
                        "affected_components": null,
                        "id": "j37hybgsfbtj",
                        "incident_id": "29ynzc1r422z"
                    }
                ]
            },
            {
                "name": "Telerik AppBuilder: Degraded Performance",
                "status": "resolved",
                "created_at": "2016-03-13T20:22:42.970Z",
                "updated_at": "2016-03-14T14:06:43.830Z",
                "monitoring_at": "2016-03-13T22:27:02.628Z",
                "resolved_at": "2016-03-14T14:06:43.801Z",
                "impact": "minor",
                "shortlink": "http://stspg.io/23lG",
                "postmortem_ignored": false,
                "postmortem_body": null,
                "postmortem_body_last_updated_at": null,
                "postmortem_published_at": null,
                "postmortem_notified_subscribers": false,
                "postmortem_notified_twitter": false,
                "backfilled": false,
                "scheduled_for": null,
                "scheduled_until": null,
                "scheduled_remind_prior": false,
                "scheduled_reminded_at": null,
                "impact_override": null,
                "scheduled_auto_in_progress": false,
                "scheduled_auto_completed": false,
                "id": "f4xw1v6p19z4",
                "page_id": "2lh8n3fl4jfr",
                "incident_updates": [
                    {
                        "status": "resolved",
                        "body": "This incident has been resolved.",
                        "created_at": "2016-03-14T14:06:43.801Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-03-14T14:06:43.801Z",
                        "display_at": "2016-03-14T14:06:43.801Z",
                        "affected_components": null,
                        "id": "v933jb7x2gf4",
                        "incident_id": "f4xw1v6p19z4"
                    },
                    {
                        "status": "monitoring",
                        "body": "We have resolved the issue and are currently monitoring our systems. \r\nThe performance issue was caused by storage hardware failure.",
                        "created_at": "2016-03-13T22:27:02.628Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-03-13T22:27:02.628Z",
                        "display_at": "2016-03-13T22:27:02.628Z",
                        "affected_components": null,
                        "id": "dzqzznpmv9tm",
                        "incident_id": "f4xw1v6p19z4"
                    },
                    {
                        "status": "identified",
                        "body": "We have identified a performance issue on one of our storage servers.\r\nSome of our users might experience slowdowns and timeouts while using Telerik AppBuilder cloud services.",
                        "created_at": "2016-03-13T20:22:43.254Z",
                        "wants_twitter_update": false,
                        "twitter_updated_at": null,
                        "updated_at": "2016-03-13T20:22:43.254Z",
                        "display_at": "2016-03-13T20:22:43.254Z",
                        "affected_components": null,
                        "id": "kcsjchj505vd",
                        "incident_id": "f4xw1v6p19z4"
                    }
                ]
            }];
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
            this._items.push(new status_view_model_1.ViewModelItem(data[i].name, data[i].incident_updates[0].body));
        }
    }
    Object.defineProperty(IncidentsViewModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    IncidentsViewModel.prototype.refresh = function () { };
    return IncidentsViewModel;
})();
exports.IncidentsViewModel = IncidentsViewModel;
