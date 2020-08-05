import React, { Component } from 'react';
import QuizCentralHeader from '../components/QuizCentralHeader';
import QuizCards from '../components/QuizCards';
import Share from '../components/Share';
import Footer from '../components/Footer';
import QuizSample from '../QuizSamples.json';

class QuizCentral extends Component {

    state = {
        QuizSample
    };

    render() {
        return(

            <div>
                <QuizCentralHeader />
                <QuizCards QuizSample={this.state.QuizSample} />
                <Share className="mt-5" />
                <Footer />
            </div>
        )
    }
}

export default QuizCentral;