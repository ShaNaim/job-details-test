const dataset = [
	{
		name: "Manufacturing",
		value: 1,
		subSet: [
			{
				name: "Construction materials",
				value: 19,
				subSet: [],
			},
			{
				name: "Electronics and Optics",
				value: 18,
				subSet: [],
			},
			{
				name: "Food and Beverage",
				value: 6,
				subSet: [
					{
						name: "Bakery &amp; confectionery products",
						value: 342,
						subSet: [],
					},
					{
						name: "Beverages",
						value: 43,
						subSet: [],
					},
					{
						name: "Fish &amp; fish products",
						value: 42,
						subSet: [],
					},
					{
						name: "Meat &amp; meat products",
						value: 40,
						subSet: [],
					},
					{
						name: "Milk &amp; dairy products",
						value: 39,
						subSet: [],
					},
					{
						name: "Sweets &amp; snack food",
						value: 378,
						subSet: [],
					},
					{
						name: "Other",
						value: 437,
						subSet: [],
					},
				],
			},

			{
				name: "Furniture",
				value: 13,
				subSet: [
					{
						name: "Bathroom/sauna",
						value: 389,
						subSet: [],
					},
					{
						name: "Bedroom",
						value: 385,
						subSet: [],
					},
					{
						name: "Children’s room",
						value: 390,
						subSet: [],
					},
					{
						name: "Kitchen",
						value: 98,
						subSet: [],
					},
					{
						name: " Living room",
						value: 101,
						subSet: [],
					},
					{
						name: "Office",
						value: 392,
						subSet: [],
					},
					{
						name: "Outdoor",
						value: 341,
						subSet: [],
					},
					{
						name: "Project furniture",
						value: 99,
						subSet: [],
					},
					{
						name: "Other (Furniture)",
						value: 394,
						subSet: [],
					},
				],
			},

			{
				name: "Machinery",
				value: 12,
				subSet: [
					{
						name: "Machinery components",
						value: 94,
						subSet: [],
					},
					{
						name: " Machinery equipment/tools",
						value: 91,
						subSet: [],
					},
					{
						name: "Manufacture of machinery",
						value: 224,
						subSet: [],
					},
					{
						name: "Maritime",
						value: 97,
						subSet: [
							{
								name: "Aluminium and steel workboats",
								value: 241,
								subSet: [],
							},
							{
								name: "Boat/Yacht building",
								value: 269,
								subSet: [],
							},
							{
								name: "Boat/Yacht building",
								value: 269,
								subSet: [],
							},
							{
								name: "Ship repair and conversion",
								value: 230,
								subSet: [],
							},
						],
					},
					{
						name: "Metal structures",
						value: 93,
						subSet: [],
					},
					{
						name: "Repair and maintenance service",
						value: 227,
						subSet: [],
					},
					{
						name: "Other",
						value: 508,
						subSet: [],
					},
				],
			},
			{
				name: "Metalworking",
				value: 11,
				subSet: [
					{
						name: "Construction of metal structures",
						value: 67,
						subSet: [],
					},
					{
						name: "Houses and buildings",
						value: 263,
						subSet: [],
					},
					{
						name: "Metal products",
						value: 267,
						subSet: [],
					},
					{
						name: "Metal works",
						value: 542,
						subSet: [
							{
								name: "CNC-machining",
								value: 75,
								subSet: [],
							},
							{
								name: "Forgings, Fasteners",
								value: 62,
								subSet: [],
							},
							{
								name: "Gas, Plasma, Laser cutting",
								value: 69,
								subSet: [],
							},
							{
								name: "MIG, TIG, Aluminum welding",
								value: 66,
								subSet: [],
							},
						],
					},
				],
			},
			{
				name: "Plastic and Rubber",
				value: 9,
				subSet: [
					{
						name: "Packaging",
						value: 54,
						subSet: [],
					},
					{
						name: "Plastic goods",
						value: 556,
						subSet: [],
					},
					{
						name: "Plastic processing technology",
						value: 559,
						subSet: [
							{
								name: "Blowing",
								value: 55,
								subSet: [],
							},
							{
								name: "Moulding",
								value: 57,
								subSet: [],
							},
							{
								name: "Plastics welding and processing",
								value: 53,
								subSet: [],
							},
						],
					},
					{
						name: "Plastic profiles",
						value: 560,
						subSet: [],
					},
				],
			},
			{
				name: "Printing",
				value: 5,
				subSet: [
					{
						name: "Advertising",
						value: 148,
						subSet: [],
					},
					{
						name: "Book/Periodicals printing",
						value: 150,
						subSet: [],
					},
					{
						name: "Labelling and packaging printing",
						value: 145,
						subSet: [],
					},
				],
			},
			{
				name: "Textile and Clothing",
				value: 7,
				subSet: [
					{
						name: "Clothing",
						value: 44,
						subSet: [],
					},
					{
						name: "Textile",
						value: 45,
						subSet: [],
					},
				],
			},
			{
				name: "Wood",
				value: 8,
				subSet: [
					{
						name: "Other (Wood)",
						value: 337,
						subSet: [],
					},
					{
						name: "Wooden building materials",
						value: 51,
						subSet: [],
					},
					{
						name: " Wooden houses",
						value: 47,
						subSet: [],
					},
				],
			},
		],
	},
	{
		name: "Other",
		value: 3,
		subSet: [
			{
				name: "Creative industries",
				value: 37,
				subSet: [],
			},
			{
				name: "Energy technology",
				value: 29,
				subSet: [],
			},
			{
				name: "Environment",
				value: 33,
				subSet: [],
			},
		],
	},
	{
		name: "Service",
		value: 2,
		subSet: [
			{
				name: "Business services",
				value: 25,
				subSet: [],
			},
			{
				name: "Engineering",
				value: 35,
				subSet: [],
			},
			{
				name: "Information Technology and Telecommunications",
				value: 28,
				subSet: [],
			},
			{
				name: "Data processing, Web portals, E-marketing",
				value: 581,
				subSet: [],
			},
			{
				name: "Programming, Consultancy",
				value: 576,
				subSet: [],
			},
			{
				name: "Software, Hardware",
				value: 121,
				subSet: [],
			},
			{
				name: "Telecommunications",
				value: 122,
				subSet: [],
			},
		],
	},
	{
		name: "Tourism",
		value: 22,
		subSet: [],
	},
	{
		name: "Translation services",
		value: 141,
		subSet: [],
	},
	{
		name: "Transport and Logistics",
		value: 21,
		subSet: [
			{
				name: "Air",
				value: 111,
				subSet: [],
			},
			{
				name: "Rail",
				value: 114,
				subSet: [],
			},
			{
				name: "Road",
				value: 112,
				subSet: [],
			},
			{
				name: "Water",
				value: 113,
				subSet: [],
			},
		],
	},
];

export default dataset;
