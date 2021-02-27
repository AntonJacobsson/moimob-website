export class ApplicationData {
    public applications: ApplicationModel[] = [
        {
            name: 'Monthly Bill Planner', 
            shortDescription: 'Monthly Bill Planner is an app that will let you organize your bills and calculate your monthly expenses.',
            image: '3.png',
            images: ['1.png', '2.png', '3.png', '4.png'],
            banner: 'banner1.png',
            slug: 'monthly-bill-planner',
            features: ['Store your Bills (which are stored locally)', 'Bills can be paid weekly, bi-weekly, monthly, bi-monthly, quarterly, semi-annually, annually. You can also set up your own custom pay period.', 'Mark bills as paid', 'Multiple bill planning tabs are available', 'Calculates your bills by even out the cost per month', 'Display bill data in charts to show cost in percentage', 'Customization, you can change color of each bill to fit your needs', '3 available languages (English, Swedish and Turkish)', '10+ currencies', 'Offline first, you can use the app while offline'],
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.moimob.billplanner&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
        },
    ]
}

export class ApplicationModel {
    public name: string;
    public shortDescription: string;
    public image: string;
    public images: string[];
    public banner: string;
    public slug: string;
    public features: string[];
    public playStoreLink: string;
}