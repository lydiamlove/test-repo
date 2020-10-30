
/** ### My Lydia Story
 * 
 * Let me tell you a little story,
 * all about when,
 * my life got turned upside down,
 * 
 * On a playground I was spending most of my days
 * When a couple of guys, they were up to no good,
 * Started making trouble in my neighborhood.
 *  
 */
const story = {
    /** ### Jar of Pickles
     * 
     * There was a JAROFPICKLES I put in my backpack so i could eat them at the playground.
     * 
     */
    jarOfPickles: {
        /** ### Eat a Pickle
         * 
         * You take the JAROFPICKLES out of your backpack.
         * 
         * You slowly start opening it while your stomach starts to grumble,
         * so you start opening it faster.
         * 
         * After you get it open you start to take a picklel out,
         * but when you try to take a bite someone throws a bowling ball at you
         * and your pickles go everywhere.
         *
         * 
         */
        eatPickle: () => ({
            jarOfPickles: null,
            /** ### Throw Pickle at Bowler
             * 
             * You pick up a pickle off of the ground and examin it.
             * 
             * You finnaly realize after 30 seconds that it's too dirty to eat,
             * so you decide to throw it at the Bowler.
             * 
             * The pickle hits him right in the eye,
             * he is not very happy with you.
             * 
             * So he throws the pickle back at you,
             * it completly missed you and it hits someone else who is walking behind you.
             * 
             * When they turned to see who it was they only see you because the Bowler ran off.
             *  
             * You think it may be a good idea to run away.
             */
            throwPickle: () => ({
                run: () => ({

                })
            })

        })
    }
};


const test = () => {
    story.jarOfPickles.eatPickle()
        .throwPickle()
        .run()

        ;
};