import { AspectRatio, Box, Flex, Image, Text, rem } from '@mantine/core'
import React, { useContext } from 'react'

import Decentralised from '../../../../assets/images/Decentralised.png'
import Lock from '../../../../assets/images/Lock.png'
import Paper from '../../../../assets/images/Paper.png'
import BoxImg from '../../../../assets/images/Box.png'
import { PlanetContext } from '~/components/contexts/PlanetContext'

const MBSUtilities = () => {
  const { isMobile, isTablet, isSmallDesktop, isMediumDesktop, isDesktop } = useContext(PlanetContext)
  return (
    <Flex align='center' justify='center' w='100%' direction='column' gap={rem(isTablet ? 40 : 80)}>
      <Text
        sx={(theme) => ({
          fontSize: rem(48),
          fontWeight: 700,
          textTransform: 'capitalize'
        })}
      >
        $MBS Utilities
      </Text>

      <Flex align='center' justify='space-between' direction={isTablet ? 'column' : 'row'}>
        <Box w={isTablet ? '100%' : '50%'}>
          <Flex align='flex-start' justify='center' direction='column' gap={rem(24)}>
            <Text
              sx={(theme) => ({
                fontSize: rem(32),
                fontWeight: 700,
                textTransform: 'capitalize'
              })}
            >
              Access and Membership
            </Text>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 400,
                textTransform: 'capitalize'
              })}
            >
              Token holders can become members of mintBase, exclusive access to certain features, events within a
              platform or community or event early waitlist. This might include early access to new releases, special
              forums, or premium content.
            </Text>
          </Flex>
        </Box>
        <Box w={isTablet ? '100%' : '30%'}>
          <AspectRatio ratio={1} w='100%'>
            <Image src={Decentralised} alt='Decentralised' />
          </AspectRatio>
        </Box>
      </Flex>

      <Flex align='center' justify='space-between' direction={isTablet ? 'column-reverse' : 'row'}>
        <Box w={isTablet ? '100%' : '30%'}>
          <AspectRatio ratio={1} w='100%'>
            <Image src={Lock} alt='Lock' />
          </AspectRatio>
        </Box>
        <Box w={isTablet ? '100%' : '50%'}>
          <Flex align='flex-start' justify='center' direction='column' gap={rem(24)}>
            <Text
              sx={(theme) => ({
                fontSize: rem(32),
                fontWeight: 700,
                textTransform: 'capitalize'
              })}
            >
              Governance and Decision
            </Text>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 400,
                textTransform: 'capitalize'
              })}
            >
              Making: $MBS holders could be given voting power or influence over certain decisions within the project.
              This could include voting on platform upgrades, content curation, artwork selection, or other
              governance-related matters. The more tokens a holder possesses, the more weight their vote carries.
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex align='center' justify='space-between' direction={isTablet ? 'column' : 'row'}>
        <Box w={isTablet ? '100%' : '50%'}>
          <Flex align='flex-start' justify='center' direction='column' gap={rem(24)}>
            <Text
              sx={(theme) => ({
                fontSize: rem(32),
                fontWeight: 700,
                textTransform: 'capitalize'
              })}
            >
              Royalties and Revenue Sharing
            </Text>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 400,
                textTransform: 'capitalize'
              })}
            >
              Receiving a percentage of the revenue generated from secondary sales of their NFTs. This incentivizes
              creators and provides ongoing rewards for their contribution. A portion of the resale price could be
              automatically directed to the original creator or a shared pool for redistribution.
            </Text>
          </Flex>
        </Box>
        <Box w={isTablet ? '100%' : '30%'}>
          <AspectRatio ratio={1} w='100%'>
            <Image src={Paper} alt='Paper' />
          </AspectRatio>
        </Box>
      </Flex>

      <Flex align='center' justify='space-between' direction={isTablet ? 'column-reverse' : 'row'}>
        <Box w={isTablet ? '100%' : '30%'}>
          <AspectRatio ratio={1} w='100%'>
            <Image src={BoxImg} alt='Box' />
          </AspectRatio>
        </Box>
        <Box w={isTablet ? '100%' : '50%'}>
          <Flex align='flex-start' justify='center' direction='column' gap={rem(24)}>
            <Text
              sx={(theme) => ({
                fontSize: rem(32),
                fontWeight: 700,
                textTransform: 'capitalize'
              })}
            >
              Staking and Rewards
            </Text>
            <Text
              sx={(theme) => ({
                fontSize: rem(24),
                fontWeight: 400,
                textTransform: 'capitalize'
              })}
            >
              $MBS holders might be able to stake their tokens in order to earn rewards, such as additional NFTs,
              platform tokens, or other digital assets. Staking could provide benefits like enhanced access, increased
              voting power, or a share of transaction fees within the ecosystem.
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex justify='center' gap={rem(40)} direction={isTablet ? 'column-reverse' : 'row'}>
        <Flex
          align='center'
          justify='center'
          direction='column'
          w={isTablet ? '100%' : '50%'}
          gap={rem(12)}
          p={rem(40)}
          sx={(theme) => ({
            borderRadius: rem(16),
            backgroundColor: theme.colors.background[1],
            flex: 1
          })}
        >
          <Text
            sx={(theme) => ({
              fontSize: rem(32),
              fontWeight: 700,
              textTransform: 'capitalize'
            })}
          >
            Airdrop redeemed by MBB
          </Text>
          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 400,
              textTransform: 'capitalize',
              textAlign: 'center'
            })}
          >
            Every MBB will be redeemed to $MBS. the amount of $MBB will be totaled and divided equally by the percentage
            of your MBB holdings. The more MBB you own, the more MBS you get.
          </Text>
        </Flex>
        <Flex
          align='center'
          justify='center'
          direction='column'
          w={isTablet ? '100%' : '50%'}
          gap={rem(12)}
          p={rem(40)}
          sx={(theme) => ({
            borderRadius: rem(16),
            backgroundColor: theme.colors.background[1],
            flex: 1
          })}
        >
          <Text
            sx={(theme) => ({
              fontSize: rem(32),
              fontWeight: 700,
              textTransform: 'capitalize'
            })}
          >
            How to get $MBS
          </Text>
          <Text
            sx={(theme) => ({
              fontSize: rem(24),
              fontWeight: 400,
              textTransform: 'capitalize',
              textAlign: 'center'
            })}
          >
            In the Season 1 MBS airdrop, we have 133,000,000 $MBS airdrop to community.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MBSUtilities
