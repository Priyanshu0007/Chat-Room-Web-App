import React from 'react'
import firebase from 'firebase/app'
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite'
import { auth, database } from '../misc/firebase'

const SignIn = () => {

    const signInWithProvider=async provider=>{
        try{
       const {additionalUserInfo,user}=await auth.signInWithPopup(provider);
       if (additionalUserInfo.isNewUser) {
           await database.ref(`/profilies/${user.uid}`).set({
               name:user.displayName,
               createdAt:firebase.database.ServerValue.TIMESTAMP
           });
       }
       Alert.success("Signed in",4000)
        }catch(err){
            Alert.info(err.message,4000)
        }
    }
    const onSignInWithGoogle=()=>{
        signInWithProvider(new firebase.auth.GoogleAuthProvider())
    }
  return (
    <Container>
        <Grid className='mt-page'>
            <Row>
                <Col xs={24} md={12} mdOffset={6}>
                    <Panel>
                        <div className='text-center'>
                            <h2>Welcome to chat</h2>
                            <p>progessive chat platform</p>
                        </div>
                        <div className='mt-3'>
                            <Button block color='green' onClick={onSignInWithGoogle}>
                                <Icon icon="google"/> Continue with google
                            </Button>
                        </div>
                    </Panel>
                </Col>
            </Row>
        </Grid>
    </Container>
  )
}

export default SignIn