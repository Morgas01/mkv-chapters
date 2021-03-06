let uuid=require("uuid/v4");
module.exports=function()
{
	return {
		"EBML": {
			"_name": "EBML",
			"_raw": {
				"tagStr": "1a45dfa3",
				"type": "m",
				"dataSize": 35,
				"tag": 172351395,
				"name": "EBML",
				"start": 0,
				"end": 40
			},
			"EBMLVersion": {
				"tagStr": "4286",
				"type": "u",
				"dataSize": 1,
				"tag": 646,
				"name": "EBMLVersion",
				"start": 5,
				"end": 9,
				"data": Buffer.from('01','hex'),
				"discardable": false,
				"keyframe": false,
				"payload": null,
				"value": 1
			},
			"EBMLReadVersion": {
				"tagStr": "42f7",
				"type": "u",
				"dataSize": 1,
				"tag": 759,
				"name": "EBMLReadVersion",
				"start": 9,
				"end": 13,
				"data": Buffer.from('01','hex'),
				"discardable": false,
				"keyframe": false,
				"payload": null,
				"value": 1
			},
			"EBMLMaxIDLength": {
				"tagStr": "42f2",
				"type": "u",
				"dataSize": 1,
				"tag": 754,
				"name": "EBMLMaxIDLength",
				"start": 13,
				"end": 17,
				"data": Buffer.from('04','hex'),
				"discardable": false,
				"keyframe": false,
				"payload": null,
				"value": 4
			},
			"EBMLMaxSizeLength": {
				"tagStr": "42f3",
				"type": "u",
				"dataSize": 1,
				"tag": 755,
				"name": "EBMLMaxSizeLength",
				"start": 17,
				"end": 21,
				"data": Buffer.from('08','hex'),
				"discardable": false,
				"keyframe": false,
				"payload": null,
				"value": 8
			},
			"DocType": {
				"tagStr": "4282",
				"type": "s",
				"dataSize": 8,
				"tag": 642,
				"name": "DocType",
				"start": 21,
				"end": 32,
				"data": Buffer.from('6d6174726f736b61','hex'),
				"discardable": false,
				"keyframe": false,
				"payload": null,
				"value": "matroska"
			},
			"DocTypeVersion": {
				"tagStr": "4287",
				"type": "u",
				"dataSize": 1,
				"tag": 647,
				"name": "DocTypeVersion",
				"start": 32,
				"end": 36,
				"data": Buffer.from('01','hex'),
				"discardable": false,
				"keyframe": false,
				"payload": null,
				"value": 1
			},
			"DocTypeReadVersion": {
				"tagStr": "4285",
				"type": "u",
				"dataSize": 1,
				"tag": 645,
				"name": "DocTypeReadVersion",
				"start": 36,
				"end": 40,
				"data": Buffer.from('01','hex'),
				"discardable": false,
				"keyframe": false,
				"payload": null,
				"value": 1
			}
		},
		"Segment": {
			"_name": "Segment",
			"_raw": {
				"tagStr": "18538067",
				"type": "m",
				"dataSize": 4281,
				"tag": 139690087,
				"name": "Segment",
				"start": 40,
				"end": 4333
			},
			"Chapters": {
				"_name": "Chapters",
				"_raw": {
					"tagStr": "1043a770",
					"type": "m",
					"dataSize": 85,
					"tag": 4433776,
					"name": "Chapters",
					"start": 72,
					"end": 162
				},
				"EditionEntry": {
					"_name": "EditionEntry",
					"_raw": {
						"tagStr": "45b9",
						"type": "m",
						"dataSize": 82,
						"tag": 1465,
						"name": "EditionEntry",
						"start": 77,
						"end": 162
					},
					"EditionFlagOrdered": {
						"tagStr": "45dd",
						"type": "u",
						"dataSize": 1,
						"tag": 1501,
						"name": "EditionFlagOrdered",
						"start": 80,
						"end": 84,
						"data": Buffer.from('01','hex'),
						"discardable": false,
						"keyframe": false,
						"payload": null,
						"value": 1
					},
					"EditionUID": {
						"tagStr": "45bc",
						"type": "u",
						"dataSize": 8,
						"tag": 1468,
						"name": "EditionUID",
						"start": 84,
						"end": 95,
						"data": uuid(null,Buffer.alloc(8))
					},
					"ChapterAtom": [] //chapters go here
				}
			},
			"Info": {
				"_name": "Info",
				"_raw": {
					"tagStr": "1549a966",
					"type": "m",
					"dataSize": 142,
					"tag": 88713574,
					"name": "Info",
					"start": 4151,
					"end": 4299
				},
				"TimecodeScale": {
					"tagStr": "2ad7b1",
					"type": "u",
					"dataSize": 3,
					"tag": 710577,
					"name": "TimecodeScale",
					"start": 4157,
					"end": 4164,
					"data": Buffer.from('0f4240','hex'),
					"value": 1000000
				},
				"MuxingApp": {
					"tagStr": "4d80",
					"type": "8",
					"dataSize": 35,
					"tag": 3456,
					"name": "MuxingApp",
					"start": 4164,
					"end": 4202,
					"data": Buffer.from("mkv-chapter-merge v0.1.0")
				},
				"WritingApp": {
					"tagStr": "5741",
					"type": "8",
					"dataSize": 53,
					"tag": 5953,
					"name": "WritingApp",
					"start": 4202,
					"end": 4258,
					"data": Buffer.from("mkv-chapter-merge v0.1.0")
				},
				"SegmentUID": {
					"tagStr": "73a4",
					"type": "b",
					"dataSize": 16,
					"tag": 13220,
					"name": "SegmentUID",
					"start": 4280,
					"end": 4299,
					"data": uuid(null,Buffer.alloc(8))
				}
			}
		}
	};
};